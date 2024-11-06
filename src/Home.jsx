import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from "./axiosApi";
import LoginForm from "./LoginForm";
import FormButtons from './FormButtons';
import Loading from './Loading';
import handleChange from './handleChange';
import parseErrors from './parseErrors';

const Home = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        api.post("/auth/entrar", inputs)
            .then((response) => {                
                if (response.status === 200) {
                    navigate("/orders");
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
            <h1 className='mt-2'>Página Principal</h1>
            <hr />
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <LoginForm handleChange={localHandleChange} errors={errors} inputs={inputs} />
                <div>
                    <button type="submit" className="btn btn-primary">
                        Entrar
                    </button>
                </div>
            </form>
            {loading && <Loading />}
        </>
    )
}

export default Home;