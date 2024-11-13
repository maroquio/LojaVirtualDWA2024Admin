import PropTypes from 'prop-types';

const FormTextarea = ({ field, onChange, label, value, error, autofocus = false }) => {
    return (
        <>
            <div className="form-floating">
                <textarea className={`form-control ${error ? 'is-invalid' : 'is-valid'}`} placeholder=" " id={field} name={field} onChange={onChange} autoFocus={autofocus} style={{ height: '10rem' }} value={value || ""}></textarea>
                <label htmlFor={field}>{label}</label>
                {error && <div className="invalid-feedback" dangerouslySetInnerHTML={{__html: error}} />}
            </div>
        </>
    );
}

FormTextarea.propTypes = {
    field: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
    autofocus: PropTypes.bool
};

export default FormTextarea;