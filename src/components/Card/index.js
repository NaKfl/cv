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
        <section className='card'>
          <section className='card__content'>WORKS</section>
        </section>
      )) ||
      (menu === MENU_ITEM.BLOGS.value && (
        <section className='card'>
          <section className='card__content'>BLOGS</section>
        </section>
      )) ||
      (menu === MENU_ITEM.CONTACT.value && (
        <section className='card'>
          <section className='card__content'>CONTACT</section>
        </section>
      ))
    );
  }
}

export default Card;
