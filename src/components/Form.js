import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            data-testid="name-input"
            id="name"
            name="name"
          />
        </label>

        <textarea
          data-testid="description-input"
          id="description"
          name="description"
        />

        <label htmlFor="first">
          <input
            type="number"
            data-testid="attr1-input"
            id="first"
            name="first"
          />
        </label>

        <label htmlFor="second">
          <input
            type="number"
            data-testid="attr2-input"
            id="second"
            name="second"
          />
        </label>

        <label htmlFor="third">
          <input
            type="number"
            data-testid="attr3-input"
            id="third"
            name="third"
          />
        </label>

        <label htmlFor="image">
          <input
            type="file"
            data-testid="image-input"
            id="image"
            name="image"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade da carta
          <select
            data-testid="rare-input"
            name="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="supertrunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="supertrunfo"
            name="supertrunfo"
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
