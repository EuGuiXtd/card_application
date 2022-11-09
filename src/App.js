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
    cards: [],
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
    console.log(target);
    this.setState({
      cards: [],
    });
  };

  handleClick = () => {
    const { name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rarity,
      cards,
      trunfo,
    } = this.state;
    if (trunfo === true) {
      this.setState({
        textoTrunfo: 'Você já tem um Super Trunfo em seu baralho',
      });
    }
    const cartas = Array.from(cards);
    this.setState({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: 'normal',
      cards: cartas,
    });
    cartas.push(
      'Nome: ',
      name,
      <br />,
      <br />,
      'Descrição: ',
      description,
      <br />,
      <br />,
      <br />,
      image,
      <br />,
      <br />,
      <br />,
      'Ataque: ',
      attr1,
      <br />,
      <br />,
      'Defesa: ',
      attr2,
      <br />,
      <br />,
      'Armadura: ',
      attr3,
      <br />,
      <br />,
      'Raridade: ',
      rarity,
      <br />,
      <br />,
      <button
        type="button"
        data-testid="delete-button"
        onClick={ this.ExcluiCarta }
      >
        Excluir
      </button>,
    );
  };

  render() {
    const { name, description, image,
      attr1, attr2, attr3, rarity, trunfo, cards, textoTrunfo } = this.state;

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
          teste={ cards }
        />
      </div>
    );
  }
}

export default App;
