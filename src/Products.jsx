import { useEffect, useState } from "react";
import NoProducts from "./NoProducts";
import TableProducts from "./TableProducts";
import api from "./axiosApi";
import Loading from "./Loading";
import ModalConfirm from "./ModalConfirm";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadProducts = () => {
        setLoading(true);
        const productsEndpoint = "admin/obter_produtos";
        api.get(productsEndpoint)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const deleteProduct = (productId) => {
        setLoading(true);
        api.postForm("admin/excluir_produto", {"id_produto": productId})
            .then(response => {
                if (response.status === 204)
                    loadProducts();
            })
            .catch(error => {
                console.error('Erro ao excluir produto:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleDeleteProduct = (productId) => {
        setSelectedProductId(productId);
        const modal = new bootstrap.Modal(document.getElementById('modalDeleteProduct'));
        modal.show();
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <>
            <NavLink to="/products/create" className="btn btn-primary my-3">Novo Produto</NavLink>
            {products.length > 0 ?
                <>
                    <ModalConfirm modalId="modalDeleteProduct" question="Deseja realmente excluir o produto?" confirmAction={() => deleteProduct(selectedProductId)} />
                    <TableProducts items={products} handleDeleteProduct={handleDeleteProduct} /> 
                </> :
                (!loading && <NoProducts />)
            }
            {loading && <Loading />}
        </>
    );
}

export default Products;