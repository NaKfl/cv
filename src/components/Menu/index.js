import classnames from 'classnames';
import React, { Component } from 'react';
import { MENU_ITEM } from '../../containers/App/constants';
import './styles.scss';

export default class Menu extends Component {
  renderMenu = (menu) => {
    const { activeMenu, handleOnChangeMenu } = this.props;
    const result = [];
    for (const [name, props] of Object.entries(menu)) {
      result.push(
        <li
          key={props.value}
          className={classnames('menu__item', {
            menu__active: activeMenu === props.value,
          })}
          onClick={() => handleOnChangeMenu(props.value)}
        >
          <i className={props.icon}></i>
          <span>{name}</span>
        </li>
      );
    }
    return result;
  };

  render() {
    return (
      <div>
        <section className='menu'>
          <ul>{this.renderMenu(MENU_ITEM, this.props)}</ul>
        </section>
      </div>
    );
  }
}
