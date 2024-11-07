import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark p-3">
            <div className="container ">
                <div className="d-flex align-items-center">
                    <i className="bi bi-gear fs-2 text-white"></i>
                    <span className="ms-2 fs-4 text-white">Admininistração da Loja Virtual</span>
                </div>
                <div className="nav navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/users">Usuários</NavLink>
                    <NavLink className="nav-item nav-link" to="/products">Produtos</NavLink>
                    <NavLink className="nav-item nav-link" to="/orders">Pedidos</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;