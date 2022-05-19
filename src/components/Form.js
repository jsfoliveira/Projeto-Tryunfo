import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    // REQUISITO 1: Eu criei o <form>, dentro dele coloquei as tags textarea e input, que a questão pediu, sendo que eles devem estar dentro do label. O label deve ter o hmtlFor igual ao id da tag filha.Criei também o button para salvar o conteúdo digitado. Sempre que tem props, precisa validar com proptype.
    // REQUISITO 2: Antes de tudo, desestruturei a props, depois coloquei a props como valor do value. E coloquei a prop onInputChange como valor do evento onChange, ou seja, a cada mudança que houver nos inputs, vai ativar a função prop onInputChange.
    // Prop são informações que podem ser passadas para outros componentes, podendo ser string, número, função...
    // REQUISITO 4: Tive que trocar o name para o nome das props.
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          Ataque
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          Defesa
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="third">
          Velocidade
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            id="third"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare-input">
          Raridade da carta
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="supertrunfo" id="checkbox">
          <p>É super trunfo?</p>
          {/* REQUISITO 7 - parte 2: Se tiver marcado o cardtrunfo alguma vez, o hastrunfo é false, então aparece o input todo, caso contrário o hastrunfo é true (!hastrunfo), então aparecerá a mensagem. Tive auxílio do colega Murilo Costa. */}
          {
            !hasTrunfo ? <input
              type="checkbox"
              data-testid="trunfo-input"
              id="supertrunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
              : <p>Você já tem um Super Trunfo em seu baralho</p>
          }
          <button
            type="submit"
            id="save-button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
