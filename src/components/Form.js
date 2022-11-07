import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label
          htmlFor="id1"
        >
          Name
          <input type="text" id="id1" data-testid="name-input" />
        </label>
        <label
          htmlFor="id2"
        >
          Description
          <textarea type="text" id="id2" data-testid="description-input" />
        </label>
        <label
          htmlFor="id3"
        >
          Number
          <input type="number" id="id3" data-testid="attr1-input" />
        </label>
        <label
          htmlFor="id4"
        >
          Number
          <input type="number" id="id4" data-testid="attr2-input" />
        </label>
        <label
          htmlFor="id5"
        >
          Number
          <input type="number" id="id5" data-testid="attr3-input" />
        </label>
        <label
          htmlFor="id6"
        >
          Image
          <input type="url" id="id6" data-testid="image-input" />
        </label>
        <label
          htmlFor="id7"
        >
          rarity
          <select data-testid="rare-input">
            <option id="id7">normal</option>
            <option id="id7">raro</option>
            <option id="id7">muito raro</option>
          </select>
        </label>
        <label
          htmlFor="id8"
        >
          Super Trunfo
          <input type="checkbox" id="id8" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
