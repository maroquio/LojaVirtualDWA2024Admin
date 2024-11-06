import PropTypes from 'prop-types';

const ModalConfirm = ({ question, confirmAction, cancelAction, modalId }) => {
    return (
        <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Confirmação</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        {question}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelAction}>Não</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={confirmAction}>Sim</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalConfirm.propTypes = {
    question: PropTypes.string.isRequired,
    confirmAction: PropTypes.func.isRequired,
    cancelAction: PropTypes.func,
    modalId: PropTypes.string.isRequired
};

export default ModalConfirm