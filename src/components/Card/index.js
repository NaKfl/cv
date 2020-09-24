import React, { Component } from 'react';
import { MENU_ITEM } from '../../containers/App/constants';
import './styles.scss';

class Card extends Component {
  render() {
    const { menu } = this.props;

    return (
      (menu === MENU_ITEM.ABOUT && (
        <section className='card' style={{ backgroundColor: 'black' }}>
          <section className='card__content'></section>
        </section>
      )) ||
      (menu === MENU_ITEM.RESUME && (
        <section className='card' style={{ backgroundColor: 'red' }}>
          <section className='card__content'></section>
        </section>
      )) ||
      (menu === MENU_ITEM.WORKS && (
        <section className='card' style={{ backgroundColor: 'yellow' }}>
          <section className='card__content'></section>
        </section>
      )) ||
      (menu === MENU_ITEM.BLOGS && (
        <section className='card' style={{ backgroundColor: 'pink' }}>
          <section className='card__content'></section>
        </section>
      )) ||
      (menu === MENU_ITEM.CONTACT && (
        <section className='card' style={{ backgroundColor: 'green' }}>
          <section className='card__content'></section>
        </section>
      ))
    );
  }
}

export default Card;
