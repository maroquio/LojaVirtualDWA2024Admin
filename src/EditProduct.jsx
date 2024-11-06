import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from './ProductForm';
import { useEffect, useState } from 'react';
import api from "./axiosApi";
import FormButtons from './FormButtons';
import handleChange from './handleChange';
import parseErrors from './parseErrors';
import Loading from './Loading';

const EditProduct = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const idProduto = useParams().id;
    if (!idProduto) {
        navigate("/products");
    }

    function loadProductById(id) {
        setLoading(true);
        const getProductEndpoint = `admin/obter_produto/${id}`;
        api.get(getProductEndpoint)
            .then(response => {
                setInputs(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar produto:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const editProductEndpoint = "admin/alterar_produto";
        await api.post(editProductEndpoint, inputs)
            .then((response) => {
                if (response.status === 204) {
                    navigate("/products");
                } else {
                    console.log(response);
                }
            })
            .catch((error) => {
                if (error && error.response && error.response.data)
                    setErrors(parseErrors(error.response.data));
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function localHandleChange(event) {
        handleChange(event, inputs, setInputs);
    }

    useEffect(() => {
        setInputs({ ...inputs, id: idProduto });
        loadProductById(idProduto);
    }, [idProduto]);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Alteração de Produto</h1>
            </div>
            <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                <ProductForm handleChange={localHandleChange} inputs={inputs} errors={errors} isNew={false} />
                <FormButtons cancelTarget="/products" />
            </form>
            {loading && <Loading />}
        </>
    );
}

export default EditProduct;