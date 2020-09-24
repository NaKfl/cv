import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import Profile from '../../components/Profile';
import { MENU_ITEM, PARTICLES_PARAM } from './constants';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: MENU_ITEM.ABOUT,
    };
  }

  handleOnChangeMenu = (activeMenu) => {
    this.setState({ activeMenu });
  };

  changeColor = (colors) => {
    const nextIndex =
      colors.indexOf(this.state.current) === colors.length - 1
        ? 0
        : colors.indexOf(this.state.current) + 1;
    this.setState({ current: colors[nextIndex] });
  };

  render() {
    const { activeMenu } = this.state;
    return (
      <section className='app'>
        <section className='app__container'>
          <div className='app__container__items'>
            <div className='app__container__items__menu'>
              <Menu
                activeMenu={activeMenu}
                handleOnChangeMenu={this.handleOnChangeMenu}
              />
            </div>
            <Profile className='app__profile' />
            <div className='app__container__items__cards'>
              <Card menu={activeMenu} />
            </div>
          </div>
        </section>
        <Particles className='app__background' params={PARTICLES_PARAM} />
      </section>
    );
  }
}
export default App;
