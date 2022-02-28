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
  isSaveButtonDisabled: true,
  mostrarLista: [],
};
// REQUISITO 4: Para renderizar o texto digitado no input, precisa criar o state. State é igual a uma props, mas, ao invés de receber a informação e só utilizá-la (PROPS), o STATE é privado e é controlado pelo componente, por isso que coloquei no App. Para definir um state, precisa criar um constructor com o método super. No this.state eu atribui o valor inicial de cada prop.

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  // REQUISITO 8 - parte 1: Desestruturei as props. Criei uma const card para guardr só as props que vou querer usar. Botei dentro do setState uma função como parâmtro. Adicionei o card dentro do array mostrarLista.
  // Tive ajuda do Murilo Costa.
  addNewCard = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState((estadoAnterior) => ({
      mostrarLista: [...estadoAnterior.mostrarLista, card],
    }));
  }

  // REQUISITO 6: Após salvar, os inputs devem voltar ao seu state inicial.
  // REQUISIOTO 8 - parte 2: chamei a função addNewCard dentro da onSaveButtonClick.
  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.addNewCard();

    this.setState({
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  // REQUISITO 5: Quando a página é carregada, o button fica disabled. O disabled recebe essa função como prop isSaveButtonDisabled, que só vai habilitar quando passar por todos os requisitos. Fiz uma variável para guardar quando o form for válido(formValido). Fiz todas as condicionais com false, porque são asc condições do botão ficar desabilitado.
  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const valorMaximo = 210;
    const valor = 90;
    let formValido = true;
    // Os campos Nome, Descrição, Imagem e Raridade devem conter alguma informação (ou seja, os inputs não podem estar vazios).
    if (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0) {
      formValido = false;
    }
    // O parseInt vai receber uma string (cardAttr1, cardAttr2, cardAttr3) e retornar um número inteiro.
    // O site developer.mozilla explica que o segundo argumento do parseInt deve ser 10.
    // Será validado se o botão salvar está desabilitado se a somatória dos campos de atributos for maior que 210.
    if (parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10) > valorMaximo) {
      formValido = false;
    }
    // Será validado se o botão salvar está desabilitado se o campo do cardAttr1, cardAttr2, cardAttr3 for maior que 90.
    if (parseInt(cardAttr1, 10) > valor
      || parseInt(cardAttr2, 10) > valor
      || parseInt(cardAttr3, 10) > valor) {
      formValido = false;
    }
    // Será validado se o botão salvar está desabilitado se o campo do cardAttr1, cardAttr2, cardAttr3 for menor que 0.
    if (parseInt(cardAttr1, 10) < 0
      || parseInt(cardAttr2, 10) < 0
      || parseInt(cardAttr3, 10) < 0) {
      formValido = false;
    }
    // Se todas essas condições forem false, então o contrário será true, aí irá habilitar o botão. Eu peguei essa ideia na mentoria.
    this.setState({
      isSaveButtonDisabled: !formValido,
    });
  }

  // Eu segui o exemplo da última aula do Braddock
  // REQUISITO 4: A cada mudança feita nos inputs, precisa ativar a função onInputChange. O bind(this) é necessário para que, dentro da função possamos usar o this, se referindo ao componente. Caso contrário, o this será undefined dentro da função e o setState não funcionará. Porém usei o arrow function, por isso que não precisei usar o bind. Destruturei o event.target no argumento da função.
  // Para atualizar o state desse componente, usei o this.setState, ou seja, a cada alteração do texto do input, o event.target.name(que pode ser por exemplo o carName) vai receber o seu valor.
  // A const value diz que: O event.target.type é igual a 'checkbox'?(ou seja, o tipo do input é checkbox?). Se sim, use event.target.checked (deixe marcado, seja true) e mostre o event.target.value ('Super Trunfo').
  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target.checked);
    // this.validateForm vai adicionando no setState, peguei a ideia na mentoria.
    this.setState({ [name]: value }, this.validateForm);
  }
  // REQUISITO 7
  // superTrunfo = () => {
  //   const { cardTrunfo } = this.setState;
  //   cardTrunfo.checked
  // }

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
      cardTrunfo,
      isSaveButtonDisabled,
      mostrarLista,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
        {/* REQUISITO 8 */}
        { mostrarLista.map((element) => (
          <Card
            key={ element.cardName }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardImage={ element.cardImage }
            cardRare={ element.cardRare }
            cardTrunfo={ element.cardTrunfo }
          />
        )) }
      </div>
    );
  }
}

export default App;
