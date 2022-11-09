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
    rarity: '',
    trunfo: false,
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

  render() {
    const { name, description, image,
      attr1, attr2, attr3, rarity, trunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          isSaveButtonDisabled={ this.disabled() }
          onInputChange={ this.handleChange }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
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
      </div>
    );
  }
}

export default App;
