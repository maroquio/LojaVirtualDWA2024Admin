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

export default TableUsers;