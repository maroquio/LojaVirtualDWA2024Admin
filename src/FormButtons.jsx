import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const FormButtons = ({ cancelTarget }) => {
    return (
        <div>
            <Link to={cancelTarget} className="btn btn-secondary me-2">
                Cancelar
            </Link>
            <button type="submit" className="btn btn-primary">
                Salvar
            </button>
        </div>
    );
}

FormButtons.propTypes = {
    cancelTarget: PropTypes.string.isRequired
};

export default FormButtons;