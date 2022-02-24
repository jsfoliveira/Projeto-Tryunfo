import React from 'react';
import PropTypes from 'prop-types';

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
    // REQUISITO 3: Antes de tudo, desestruturei os props. Coloquei as props para serem exibidas nas tags. A última parte eu coloquei entre {} porque é uma função, que diz que: o cardTrunfo for true? Se sim, coloque o texto Super Trunfo na tag. Se não, não coloque nada. No fim, validei todas as props.
    return (
      <>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </>

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
