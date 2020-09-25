import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { animated, Transition } from 'react-spring/renderprops';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import Profile from '../../components/Profile';
import { MENU_ITEM, PARTICLES_PARAM } from './constants';
import './styles.scss';

const pages = [
  (style) => (
    <animated.div style={{ ...style, background: '#b3FFBD' }}>A</animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style, background: '#B2DBBF' }}>B</animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style, background: '#12DBBF' }}>C</animated.div>
  ),
];
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
            <Profile />
            {/* <div className='app__container__items__card'>
              <Card menu={activeMenu} />
            </div> */}
            <div style={{ width: 708, height: '100%' }}>
              <Transition
                native
                unique
                items={activeMenu}
                from={{ opacity: 0, width: 0 }}
                enter={{ opacity: 1, width: 700 }}
                leave={{ display: 'none' }}
              >
                {(item) => (style) => (
                  <animated.div
                    className='app__container__items__card'
                    style={style}
                  >
                    <Card menu={activeMenu} />
                  </animated.div>
                )}
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
