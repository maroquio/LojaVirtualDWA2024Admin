import PropTypes from 'prop-types';

const NoOrders = ({ state }) => {
    return (
        <p className="lead">Não há pedidos no estado <b className="fw-bold">{state}</b>.</p>
    );
}

NoOrders.propTypes = {
    state: PropTypes.string.isRequired
};

export default NoOrders;