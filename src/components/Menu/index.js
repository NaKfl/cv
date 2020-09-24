import React, { Component } from 'react';
import './styles.scss';

export default class Menu extends Component {
  render() {
    return (
      <>
        <section className='menu'>
          <ul>
            <li className='menu__item'>ABOUT</li>
            <li className='menu__item'>RESUME</li>
            <li className='menu__item'>WORKS</li>
            <li className='menu__item'>BLOG</li>
            <li className='menu__item'>CONTACT</li>
          </ul>
        </section>
      </>
    );
  }
}
