import PropTypes from 'prop-types';
import TableUsersLine from './TableUsersLine'

const TableUsers = ({ items, handleDeleteUser }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map(u => <TableUsersLine item={u} key={u.id} handleDeleteUser={handleDeleteUser} />)}
            </tbody>
        </table>
    );
}

TableUsers.propTypes = {
    items: PropTypes.array.isRequired,
    handleDeleteUser: PropTypes.func.isRequired
};

export default TableUsers;