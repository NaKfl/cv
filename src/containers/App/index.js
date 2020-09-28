import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { animated, Transition } from 'react-spring/renderprops';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import Profile from '../../components/Profile';
import { MENU_ITEM, PARTICLES_PARAM } from './constants';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: MENU_ITEM.ABOUT.value,
    };

    this.pages = Object.values(MENU_ITEM).map(({ value }) => (style) => (
      <animated.div
        className='app__container__items__cards__single'
        style={style}
      >
        <Card menu={value} />
      </animated.div>
    ));
  }

  handleOnChangeMenu = (activeMenu) => {
    this.setState({ activeMenu });
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
            <div className='app__container__items__profile'>
              <Profile />
            </div>

            <div className='app__container__items__cards'>
              <Transition
                native
                unique
                items={activeMenu}
                config={{ duration: 300 }}
                from={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
              >
                {(menu) => this.pages[menu]}
              </Transition>
            </div>
          </div>
        </section>
        <Particles className='app__background' params={PARTICLES_PARAM} />
      </section>
    );
  }
}
export default App;
