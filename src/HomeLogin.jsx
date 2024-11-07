import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from "./LoginForm";
import Loading from './Loading';
import handleChange from './handleChange';
import { login } from './authService';

const HomeLogin = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        if (await login(inputs.email, inputs.senha)) {
            navigate("/orders");
        } else {
            setErrors({ email: 'E-mail ou senha inválidos' });
        }
        setLoading(false);
    }

    function localHandleChange(event) {
        handleChange(event, inputs, setInputs);
    }

    return (
        <>
            <h1 className='mt-2'>Entrar</h1>
            <hr />
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
    );
}

export default HomeLogin;