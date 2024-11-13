import PropTypes from 'prop-types';

const FormInput = ({ type, field, onChange, label, value, error, autofocus = false }) => {
    //const parsedError = parse(DOMPurify.sanitize(error));
    return (
        <>
            <div className="form-floating">
                <input type={type} className={`form-control ${error ? 'is-invalid' : 'is-valid'}`} placeholder=" " id={field} name={field} value={value || ""} onChange={onChange} autoFocus={autofocus} />
                <label htmlFor={field}>{label}</label>
                {error && <div className="invalid-feedback" dangerouslySetInnerHTML={{__html: error}} />}
            </div>
        </>
    );
}

FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
    autofocus: PropTypes.bool
};

export default FormInput;