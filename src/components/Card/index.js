import React, { Component } from 'react';
import './styles.scss';

class Card extends Component {
  render() {
    const { color } = this.props;
    return (
      <>
        <section className='card' style={{ backgroundColor: color }}>
          <section className='card__content'></section>
        </section>
      </>
    );
  }
}

export default Card;
