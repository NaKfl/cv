import React, { Component } from 'react';
import './styles.scss';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <section className='menu'>
          <ul>
            <li className='menu__item'>
              <i class='fa fa-user'></i>
              <span>ABOUT</span>
            </li>
            <li className='menu__item'>
              <i class='fa fa-list-alt'></i>
              <span>RESUME</span>
            </li>
            <li className='menu__item'>
              <i class='fa fa-paint-brush'></i>
              <span>WORKS</span>
            </li>
            <li className='menu__item'>
              <i class='fa fa-comment-dots'></i>
              <span>BLOG</span>
            </li>
            <li className='menu__item'>
              <i class='fa fa-at'></i>
              <span>CONTACT</span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
