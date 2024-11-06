import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NumberFormatter, DateTimeFormatter, CurrencyFormatter, StringFormatter } from './formatters';

const TableOrdersLine = ({ item, handleCancelOrder, handleEvolveOrder }) => {
    return (
        <tr>
            <td>{NumberFormatter.format(item.id, 6)}</td>
            <td>{DateTimeFormatter.format(new Date(item.data_hora))}</td>
            <td>{CurrencyFormatter.format(item.valor_total)}</td>
            <td>{StringFormatter.Capitalize(item.estado)}</td>
            <td>
                <Link className="btn btn-outline-info btn-sm me-1" title="Ver Detalhes" to={`/orders/${item.id}`}>
                    <i className="bi bi-zoom-in"></i>
                </Link>
                {(!["carrinho", "pendente", "cancelado", "entregue"].includes(item.estado)) &&
                    <button className="btn btn-outline-success btn-sm me-1" title="Progredir Estado" onClick={() => handleEvolveOrder(item.id)}>
                        <i className="bi bi-arrow-right-circle"></i>
                    </button>}
                {(item.estado == "pendente") &&
                    <button className="btn btn-outline-danger btn-sm" title="Cancelar Pedido" onClick={() => handleCancelOrder(item.id)}>
                        <i className="bi bi-x-circle"></i>
                    </button>}
            </td>
        </tr>
    );
}

TableOrdersLine.propTypes = {
    item: PropTypes.object.isRequired,
    handleCancelOrder: PropTypes.func.isRequired,
    handleEvolveOrder: PropTypes.func.isRequired
};

export default TableOrdersLine;