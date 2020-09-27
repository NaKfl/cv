import React, { Component } from 'react';
import { MENU_ITEM } from '../../containers/App/constants';
import ContentAbout from './Content/About';
import ContentEnd from './Content/End';
import ContentProject from './Content/Project';
import ContentSkills from './Content/Skills';
import ContentWorks from './Content/Works';
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
          <section className='card__content'>
            <ContentWorks />
          </section>
        </section>
      )) ||
      (menu === MENU_ITEM.PROJECT.value && (
        <section className='card'>
          <section className='card__content'>
            <ContentProject />
          </section>
        </section>
      )) ||
      (menu === MENU_ITEM['THE END'].value && (
        <section className='card'>
          <section className='card__content'>
            <ContentEnd />
          </section>
        </section>
      ))
    );
  }
}

export default Card;
