import { useEffect, useState } from "react";
import TableUsers from './TableUsers';
import Loading from "./Loading";
import api from "./axiosApi";
import ModalConfirm from "./ModalConfirm";
import NoUsers from "./NoUsers";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUserId, setSelectedUserId] = useState(0);

    const loadUsers = () => {
        setLoading(true);
        const usersEndpoint = "admin/obter_usuarios";
        api.get(usersEndpoint)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const deleteUser = (userId) => {
        setLoading(true);
        api.postForm("admin/excluir_usuario", { "id_usuario": userId })
            .then(response => {
                if (response.status === 204)
                    loadUsers();
            })
            .catch(error => {
                console.error('Erro ao excluir o usuário:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleDeleteUser = (userId) => {
        setSelectedUserId(userId);
        const modal = new bootstrap.Modal(document.getElementById('modalDeleteUser'));
        modal.show();
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <>
            {users.length > 0 ?
                <>
                    <ModalConfirm modalId="modalDeleteUser" question="Deseja realmente excluir este usuário?" confirmAction={() => deleteUser(selectedUserId)} />
                    <TableUsers items={users} handleDeleteUser={handleDeleteUser} />
                </> :
                (!loading && <NoUsers />)}
            {loading && <Loading />}
        </>
    );
}

export default Users