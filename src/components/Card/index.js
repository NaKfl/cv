import React, { Component } from 'react';
import { MENU_ITEM } from '../../containers/App/constants';
import ContentAbout from './Content/About';
import ContentSkills from './Content/Skills';
import './styles.scss';

class Card extends Component {
  render() {
    const { menu } = this.props;
    return (
      (menu === MENU_ITEM.ABOUT.value && (
        <section className='card'>
          <section className='card__content'>
            <ContentAbout />
          </section>
        </section>
      )) ||
      (menu === MENU_ITEM.SKILLS.value && (
        <section className='card'>
          <section className='card__content'>
            <ContentSkills />
          </section>
        </section>
      )) ||
      (menu === MENU_ITEM.WORKS.value && (
        <section className='card' style={{ backgroundColor: 'yellow' }}>
          <section className='card__content'>3</section>
        </section>
      )) ||
      (menu === MENU_ITEM.BLOGS.value && (
        <section className='card' style={{ backgroundColor: 'pink' }}>
          <section className='card__content'>4</section>
        </section>
      )) ||
      (menu === MENU_ITEM.CONTACT.value && (
        <section className='card' style={{ backgroundColor: 'green' }}>
          <section className='card__content'>5</section>
        </section>
      ))
    );
  }
}

export default Card;
