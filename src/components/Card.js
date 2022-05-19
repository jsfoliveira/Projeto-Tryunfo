import React from 'react';
import PropTypes from 'prop-types';
import pokemon1 from '../assets/eevee.jpeg';
import pokemon2 from '../assets/bulbasaur.jpeg';
import pokemon3 from '../assets/charmader.png';
import pokemon4 from '../assets/jigglypuff.jpeg';
import pokemon5 from '../assets/pikachu.png';
import '../App.css';

class Card extends React.Component {
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

    } = this.props;

    const arrayImagem = [
      {
        name: 'eevee',
        imagem: pokemon1,
      },
      {
        name: 'bulbasaur',
        imagem: pokemon2,
      },
      {
        name: 'charmader',
        imagem: pokemon3,
      },
      {
        name: 'pikachu',
        imagem: pokemon5,
      },
      {
        name: 'jigglypuff',
        imagem: pokemon4,
      },
    ];
    // REQUISITO 3: Antes de tudo, desestruturei os props. Coloquei as props para serem exibidas nas tags. A última parte eu coloquei entre {} porque é uma função, que diz que: o cardTrunfo for true? Se sim, coloque o texto Super Trunfo na tag. Se não, não coloque nada. No fim, validei todas as props.
    return (
      <div className="container-card">
        <div className="card-information">
          <h2 data-testid="name-card">
            { cardName }
          </h2>

          <p data-testid="description-card">
            Descrição:
            { cardDescription }
          </p>
          <p data-testid="attr1-card">
            Ataque:
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            Defesa:
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            Velocidade:
            { cardAttr3 }
          </p>
          <p data-testid="rare-card">{ cardRare }</p>
          {cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
        </div>
        <div className="card-image">
          {/* <img data-testid="image-card" src={ cardImage } alt={ cardName } /> */}
          {/*           // (cardImage === 'pikachu')
            //   ? <img data-testid="image-card" src={ pokemon5 } alt={ cardName } />
            //   : <img data-testid="image-card" src={ pokemon4 } alt={ cardName } /> */}
          {
            arrayImagem
              .filter((filtrar) => filtrar.name.toLowerCase() === cardImage)
              .map((buscar) => (<img
                key={ buscar.cardName }
                data-testid="image-card"
                src={ buscar.imagem }
                alt={ cardName }
              />))
          }
        </div>
      </div>

    );
  }
}
// Configurar uma prop como obrigatória é muito útil quando o componente é dependente de uma propriedade passada por seu componente pai e não irá funcionar sem ela.
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
