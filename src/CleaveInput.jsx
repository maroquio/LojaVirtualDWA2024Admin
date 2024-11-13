import PropTypes from 'prop-types';
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.br";

const CleaveInput = ({ type, field, onChange, options, label, value, error }) => {
    return (
        <>
            <div className="form-floating">
                <Cleave type={type} className={`form-control ${error ? "is-invalid" : "is-valid"}`} id={field} name={field} placeholder=" " onChange={onChange} options={options} value={value} />
                <label htmlFor={field}>{label}</label>
                {error && <div className="invalid-feedback" dangerouslySetInnerHTML={{__html: error}} />}
            </div>
        </>
    );
};

CleaveInput.propTypes = {
    type: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string
};

export default CleaveInput;