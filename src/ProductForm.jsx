import PropTypes from 'prop-types';
import CleaveInput from "./CleaveInput"
import FormInput from "./FormInput"
import FormTextarea from "./FormTextarea"

const ProductForm = ({ handleChange, inputs, errors }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 mb-3">
                    <FormInput type="text" field="nome" label="Nome" value={inputs?.nome} onChange={handleChange} error={errors?.nome} autofocus={true} />
                </div>
                <div className="col-12 mb-3">
                    <FormTextarea field="descricao" label="Descrição" value={inputs?.descricao} onChange={handleChange} error={errors?.descricao} />
                </div>
                <div className="col-6 mb-3">
                    <CleaveInput type="text" field="preco" label="Preço" value={inputs?.preco} onChange={handleChange} error={errors?.preco} options={{ numeral: true, numeralThousandsGroupStyle: 'thousand', prefix: 'R$ ', rawValueTrimPrefix: true, delimiter: '.', numeralDecimalMark: ',' }} />
                </div>
                <div className="col-6 mb-3">
                    <CleaveInput type="text" field="estoque"
                        label="Estoque" onChange={handleChange}
                        value={inputs.estoque} error={errors?.estoque}
                        options={{
                            numeral: true,
                            numeralPositiveOnly: true,
                            numeralThousandsGroupStyle: 'thousand',
                            delimiter: '.',
                            numeralDecimalMark: ','
                        }} />
                </div>
            </div>
        </>
    );
}

ProductForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    inputs: PropTypes.object.isRequired,
    errors: PropTypes.object
};

export default ProductForm;