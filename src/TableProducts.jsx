import PropTypes from 'prop-types';
import TableProductsLine from "./TableProductsLine"

const TableProducts = ({ items, handleDeleteProduct }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map(p => <TableProductsLine item={p} key={p.id} handleDeleteProduct={handleDeleteProduct} />)}
            </tbody>
        </table>
    );
}

TableProducts.propTypes = {
    items: PropTypes.array.isRequired,
    handleDeleteProduct: PropTypes.func.isRequired
};

export default TableProducts;