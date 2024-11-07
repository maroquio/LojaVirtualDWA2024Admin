import { useNavigate } from "react-router-dom";
import { getUserData, logout } from "./authService";

const HomeLogout = () => {
    const userData = getUserData();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <>
            <h1 className="mt-2">Página Principal</h1>
            <hr />
            <p className="lead">Olá, {userData.nome}!</p>
            <p>Seja bem-vindo à administração da loja virtual.</p>
            <p>Para sair, clique no botão abaixo.</p>
            <button className="btn btn-primary" onClick={handleLogout}>Sair</button>
        </>
    )
}

export default HomeLogout