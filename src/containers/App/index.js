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
      deviceWidth: 0,
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

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ deviceWidth: window.innerWidth });
  };

  handleOnChangeMenu = (activeMenu) => {
    this.setState({ activeMenu });
  };

  render() {
    const { activeMenu, deviceWidth } = this.state;
    return (
      <section className='app'>
        <section className='app__container'>
          <div className='app__container__items'>
            <div className='app__container__items__flex'>
              <div className='app__container__items__menu'>
                <Menu
                  activeMenu={activeMenu}
                  handleOnChangeMenu={this.handleOnChangeMenu}
                />
              </div>
              <div className='app__container__items__profile'>
                <Profile />
              </div>
            </div>

            <div className='app__container__items__cards'>
              {(deviceWidth >= 1024 && (
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
              )) ||
                Object.values(MENU_ITEM).map(({ value }) => (
                  <div className='app__container__items__cards__single'>
                    <Card menu={value} />
                  </div>
                ))}
            </div>
          </div>
        </section>
        <Particles className='app__background' params={PARTICLES_PARAM} />
      </section>
    );
  }
}
export default App;
