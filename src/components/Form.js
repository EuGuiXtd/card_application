import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
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
    return (
      <form>
        <label
          htmlFor="id1"
        >
          Name
          <input
            type="text"
            id="id1"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="name"
          />
        </label>
        <label
          htmlFor="id2"
        >
          Description
          <textarea
            type="text"
            id="id2"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
          />
        </label>
        <label
          htmlFor="id3"
        >
          Number
          <input
            type="number"
            id="id3"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="attr1"
            min="0"
            max="90"
          />
        </label>
        <label
          htmlFor="id4"
        >
          Number
          <input
            type="number"
            id="id4"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="attr2"
            min="0"
            max="90"
          />
        </label>
        <label
          htmlFor="id5"
        >
          Number
          <input
            type="number"
            id="id5"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="attr3"
            min="0"
            max="90"
          />
        </label>
        <label
          htmlFor="id6"
        >
          Image
          <input
            type="url"
            id="id6"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="image"
          />
        </label>
        <label
          htmlFor="id7"
        >
          rarity
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="rarity"
          >
            <option id="id7">normal</option>
            <option id="id7">raro</option>
            <option id="id7">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo
            === 'Você já tem um Super Trunfo em seu baralho'
            ? (
              <div>Você já tem um Super Trunfo em seu baralho</div>
            )
            : (
              <label htmlFor="id8">
                Super Trunfo
                <input
                  id="id8"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  name="trunfo"
                />
              </label>
            )
        }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
