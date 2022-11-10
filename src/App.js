import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    image: '',
    rarity: 'normal',
    trunfo: false,
    cardList: [],
    textoTrunfo: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
    );
  };

  disabled = () => {
    const { name,
      description,
      image,
      attr1,
      attr2,
      attr3,
    } = this.state;
    const number1 = 90;
    const number2 = 0;
    const number3 = 210;
    const soma = Number(attr1) + Number(attr2) + Number(attr3);
    if
    (
      name === ''
    || description === ''
    || image === ''
    || attr1 > number1
    || attr2 > number1
    || attr3 > number1
    || attr1 < number2
    || attr2 < number2
    || attr3 < number2
    || soma > number3
    ) {
      const test = true;
      return test;
    }
  };

  ExcluiCarta = ({ target }) => {
    const { cardList } = this.state;
    const willDeleted = target.getAttribute('key-card');
    const thisTrunfo = target.getAttribute('type-card');
    cardList.splice(willDeleted, 1);
    console.log(thisTrunfo);
    if (thisTrunfo === 'trunfo') {
      console.log('trunfo');
      this.setState({
        cardList,
        textoTrunfo: '',
        trunfo: false,
      });
    } else {
      this.setState({
        cardList });
    }
  };

  handleClick = () => {
    const { trunfo,
      description,
      image,
      attr1,
      attr2,
      attr3,
      name,
      rarity,
      cardList,
      textoTrunfo } = this.state;
    if (trunfo === true) {
      this.setState({
        textoTrunfo: 'Você já tem um Super Trunfo em seu baralho',
      });
    }
    this.setState({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: 'normal',
    });
    const baralho = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo: textoTrunfo
      === 'Você já tem um Super Trunfo em seu baralho'
        ? false : trunfo,
    };
    cardList.push(baralho);
    console.log(cardList);
  };

  render() {
    const { name, description, image,
      attr1, attr2, attr3, rarity, trunfo, cardList, textoTrunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          isSaveButtonDisabled={ this.disabled() }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleClick }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          hasTrunfo={ textoTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
        {cardList.map((x, id) => (
          <>
            <Card
              key={ id }
              cardName={ x.name }
              cardDescription={ x.description }
              cardAttr1={ x.attr1 }
              cardAttr2={ x.attr2 }
              cardAttr3={ x.attr3 }
              cardImage={ x.image }
              cardRare={ x.rarity }
              cardTrunfo={ x.trunfo }
            />
            {console.log(x.trunfo)}
            <button
              data-testid="delete-button"
              type="button"
              key-card={ id }
              type-card={ x.trunfo ? 'trunfo' : 'não trunfo' }
              onClick={ this.ExcluiCarta }
            >
              Excluir
            </button>

          </>))}

      </div>
    );
  }
}

export default App;
