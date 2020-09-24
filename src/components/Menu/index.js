import classnames from 'classnames';
import React, { Component } from 'react';
import { MENU_ITEM } from '../../containers/App/constants';
import './styles.scss';

export default class Menu extends Component {
  render() {
    const { activeMenu, handleOnChangeMenu } = this.props;
    return (
      <div>
        <section className='menu'>
          <ul>
            <li
              className={classnames('menu__item', {
                menu__active: activeMenu === MENU_ITEM.ABOUT,
              })}
              onClick={() => handleOnChangeMenu(MENU_ITEM.ABOUT)}
            >
              <i className='fa fa-user'></i>
              <span>ABOUT</span>
            </li>
            <li
              className={classnames('menu__item', {
                menu__active: activeMenu === MENU_ITEM.RESUME,
              })}
              onClick={() => handleOnChangeMenu(MENU_ITEM.RESUME)}
            >
              <i className='fa fa-list-alt'></i>
              <span>RESUME</span>
            </li>
            <li
              className={classnames('menu__item', {
                menu__active: activeMenu === MENU_ITEM.WORKS,
              })}
              onClick={() => handleOnChangeMenu(MENU_ITEM.WORKS)}
            >
              <i className='fa fa-paint-brush'></i>
              <span>WORKS</span>
            </li>
            <li
              className={classnames('menu__item', {
                menu__active: activeMenu === MENU_ITEM.BLOGS,
              })}
              onClick={() => handleOnChangeMenu(MENU_ITEM.BLOGS)}
            >
              <i className='fa fa-comment-dots'></i>
              <span>BLOG</span>
            </li>
            <li
              className={classnames('menu__item', {
                menu__active: activeMenu === MENU_ITEM.CONTACT,
              })}
              onClick={() => handleOnChangeMenu(MENU_ITEM.CONTACT)}
            >
              <i className='fa fa-at'></i>
              <span>CONTACT</span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
