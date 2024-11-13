import { useEffect, useState } from "react";
import api from './axiosApi';
import TableOrders from "./TableOrders";
import NoOrders from "./NoOrders";
import ModalConfirm from "./ModalConfirm";
import Loading from "./Loading";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [orderState, setOrderState] = useState("pendente");
    const [selectedOrderId, setSelectedOrderId] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadOrders = (state) => {
        setLoading(true);
        const ordersEndpoint = `admin/obter_pedidos_por_estado/${state}`;
        api.get(ordersEndpoint)
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const cancelOrder = (orderId) => {
        setLoading(true);
        api.postForm("admin/cancelar_pedido", { "id_pedido": orderId })
            .then(response => {
                if (response.status === 204)
                    loadOrders(orderState);
            })
            .catch(error => {
                console.error('Erro ao cancelar pedido:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const evolveOrder = (orderId) => {
        setLoading(true);
        api.postForm("admin/evoluir_pedido", { "id_pedido": orderId })
            .then(response => {
                if (response.status === 204)
                    loadOrders(orderState);
            })
            .catch(error => {
                console.error('Erro ao evoluir pedido:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleCancelOrder = (orderId) => {
        setSelectedOrderId(orderId);
        const modal = new bootstrap.Modal(document.getElementById('modalCancelOrder'));
        modal.show();
    }

    const handleEvolveOrder = (orderId) => {
        setSelectedOrderId(orderId);
        const modal = new bootstrap.Modal(document.getElementById('modalEvolveOrder'));
        modal.show();
    }

    useEffect(() => {
        loadOrders(orderState);
    }, [orderState]);

    return (
        <>
            <div className="form-floating my-3">
                <select id="orderState" value={orderState} onChange={(event) => setOrderState(event.target.value)} className="form-control">
                    <option value="carrinho">Carrinho</option>
                    <option value="pendente">Pendente</option>
                    <option value="pago">Pago</option>
                    <option value="faturado">Faturado</option>
                    <option value="separado">Separado</option>
                    <option value="enviado">Enviado</option>
                    <option value="entregue">Entregue</option>
                    <option value="cancelado">Cancelado</option>
                </select>
                <label htmlFor="orderState" className="form-label">
                    Estado do Pedido:
                </label>
            </div>
            {orders.length > 0 ?
                <>
                    <ModalConfirm modalId="modalCancelOrder" question="Deseja realmente cancelar o pedido?" confirmAction={() => cancelOrder(selectedOrderId)}
                    />
                    <ModalConfirm modalId="modalEvolveOrder" question="Deseja realmente evoluir o pedido?" confirmAction={() => evolveOrder(selectedOrderId)}
                    />
                    <TableOrders items={orders} handleCancelOrder={handleCancelOrder} handleEvolveOrder={handleEvolveOrder} />
                </> :
                (!loading && <NoOrders state={orderState} />)}
            {loading && <Loading />}
        </>
    );
}

export default Orders;