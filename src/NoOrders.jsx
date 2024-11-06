const NoOrders = ({ state }) => {
    return (
        <p className="lead">Não há pedidos no estado <b className="fw-bold">{state}</b>.</p>
    );
}

export default NoOrders;