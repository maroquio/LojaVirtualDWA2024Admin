import PropTypes from 'prop-types';
import FormInput from "./FormInput";

const LoginForm = ({ handleChange, inputs, errors }) => {
    return (
        <>
            <div className="row flex-column">
                <div className="col-6 mb-3">
                    <FormInput type="email" field="email" label="E-mail" onChange={handleChange} error={errors?.email} autofocus={true} value={inputs?.email} />
                </div>
                <div className="col-6 mb-3">
                    <FormInput type="password" field="senha" label="Senha" onChange={handleChange} error={errors?.email} value={inputs?.senha} />
                </div>
            </div>
        </>
    );
}

LoginForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    inputs: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default LoginForm;