import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import EditProduct from "./EditProduct";
import Users from "./Users";
import Authorization from "./Authorization";
import CreateProduct from "./CreateProduct";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/users" element={<Authorization><Users /></Authorization>} />
                    <Route path="/products" element={<Authorization><Products /></Authorization>} />
                    <Route path="/products/:id" element={<Authorization><EditProduct /></Authorization>} />
                    <Route path="/products/create" element={<Authorization><CreateProduct /></Authorization>} />
                    <Route path="/orders" element={<Authorization><Orders /></Authorization>} />
                    <Route path="/orders/:id" element={<Authorization><OrderDetails /></Authorization>} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;