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
      deviceHeight: 0,
    };

    this.pages = Object.values(MENU_ITEM).map(({ value }) => (style) => (
      <animated.div
        className='app__container__items__cards__single'
        style={style}
      >
        <Card menu={value} />
      </animated.div>
    ));

    this.menuRefs = Array.from(Array(Object.keys(MENU_ITEM).length), (_) =>
      React.createRef()
    );
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    this.points = this.menuRefs.map((ref) => ref.current.offsetTop - 83);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateWindowDimensions = () => {
    this.setState({
      deviceWidth: window.innerWidth,
      deviceHeight: window.innerHeight,
    });
  };

  handleOnChangeMenu = (activeMenu) => {
    this.setState({ activeMenu });
    if (this.menuRefs[activeMenu].current) {
      this.scrollToMenu(this.menuRefs[activeMenu]);
    }
  };

  scrollToMenu = (ref) =>
    window.scroll({
      top: ref.current.offsetTop - 83,
      behavior: 'smooth',
    });

  handleScroll = () => {
    const points = [...this.points, Infinity];
    const { activeMenu } = this.state;
    for (let i = 0; i < points.length; i++) {
      if (
        window.scrollY >= points[i] &&
        window.scrollY <= points[i + 1] &&
        i !== activeMenu
      )
        this.setState({ activeMenu: i });
    }
  };

  render() {
    const { activeMenu, deviceWidth, deviceHeight } = this.state;
    const lastCardHeight =
      (this.menuRefs[this.menuRefs.length - 1].current &&
        this.menuRefs[this.menuRefs.length - 1].current.clientHeight) ||
      0;
    const padding = deviceHeight - lastCardHeight - 35;

    return (
      <section className='app'>
        <section className='app__container'>
          <div
            className='app__container__items'
            style={deviceWidth > 1024 ? {} : { paddingBottom: padding }}
          >
            <div className='app__container__items__flex'>
              <div className='app__container__items__menu'>
                <Menu
                  activeMenu={activeMenu}
                  handleOnChangeMenu={this.handleOnChangeMenu}
                  scrollToMenu={this.scrollToMenu}
                />
              </div>
              <div className='app__container__items__profile'>
                <Profile />
              </div>
            </div>

            <div className='app__container__items__cards'>
              {(deviceWidth > 1024 && (
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
                  <div
                    key={value}
                    ref={this.menuRefs[value]}
                    className='app__container__items__cards__single'
                  >
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
