import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardImage: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardRare: 'normal',
  cardTrunfo: false,

};
// REQUISITO 4: Para renderizar o texto digitado no input, precisa criar o state. State é igual a uma props, mas, ao invés de recer a informação e só utilizá-la (PROPS), o STATE é privado e é controlado pelo componente, por isso que coloquei no App. Para definir um state, precisa criar um constructor com o método super. No this.state eu atribui o valor inicial de cada prop.

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  // REQUISITO 6: Após salvar, os inputs devem voltar ao seu state inicial.
  onSaveButtonClick = () => {
    this.setState(INITIAL_STATE);
  }

  // Eu segui o exemplo da última aula do Braddock
  // REQUISITO 4: A cada mudança feita nos inputs, precisa ativar a função onInputChange. O bind(this) é necessário para que, dentro da função possamos usar o this, se referindo ao componente. Caso contrário, o this será undefined dentro da função e o setState não funcionará. Porém usei o arrow function, por isso que não precisei usar o bind. Destruturei o event.target no argumento da função.
  // Para atualizar o state desse componente, usei o this.setState, ou seja, a cada alteração do texto do input, o event.target.name(que pode ser por exemplo o carName) vai receber o seu valor.
  // A const value diz que: O event.target.type é igual a 'checkbox'?(ou seja, o tipo do input é checkbox?). Se sim, use event.target.checked (deixe marcado, seja true) e mostre o event.target.value ('Super Trunfo').
  onInputChange = ({ target }) => {
    console.log(target.checked);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }
  // REQUISITO 4: Desestrututei o this.state e linkei o state com os componentes filho (Form e Card). Exemplo: cardName={ cardName } quer dizer que o value = cardName usado no Form será atualizado pelo state. O state feito no App é igual ao value={cardName}. Esse {cardName} vai ser passado como valor do prop cardName para ser atualizado com sobre o que estiver sendo digitado no input. Ou seja, cardName={ cardName }, o 1º cardName é a prop e o 2º cardName é o cardName que está no value={cardName} que está no Form e ques está sendo sendo atualizado no App
  // Como o onInputChange não teve estado inicial, precisei colocar o this, para se referir ao componente.

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        {/* Eu segui o último exercício do course */}
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
