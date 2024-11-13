import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import { useState } from 'react';
import api from "./axiosApi";
import FormButtons from './FormButtons';
import handleChange from './handleChange';
import parseErrors from './parseErrors';
import Loading from './Loading';

const CreateProduct = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const insertProductEndpoint = "admin/inserir_produto";
        await api.post(insertProductEndpoint, inputs)
            .then((response) => {
                if (response.status === 201) {
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

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Inclusão de Produto</h1>
            </div>
            <form onSubmit={handleSubmit} noValidate autoComplete='off' className='mb-3'>
                <ProductForm handleChange={localHandleChange} inputs={inputs} errors={errors} />
                <FormButtons cancelTarget="/products" />
            </form>
            {loading && <Loading />}
        </>
    );
}

export default CreateProduct;