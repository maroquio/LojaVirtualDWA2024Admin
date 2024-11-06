import PropTypes from 'prop-types';
import { isAdmin } from './authService';
import { Navigate } from 'react-router-dom';

const Authorization = ({ children }) => {
    if (isAdmin()) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

Authorization.propTypes = {    
    children: PropTypes.node.isRequired    
};

export default Authorization;