import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,

    } = this.props;

    return (
      <h2 data-testid="name-card">{ cardName }</h2>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
};

export default Card;
