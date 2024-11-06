import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark p-3">
            <div className="nav navbar-nav">
                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/users">Usuários</NavLink>
                <NavLink className="nav-item nav-link" to="/products">Produtos</NavLink>
                <NavLink className="nav-item nav-link" to="/orders">Pedidos</NavLink>
            </div>
        </nav>
    )
}

export default Header;