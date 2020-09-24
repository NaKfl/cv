import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import Profile from '../../components/Profile';
import { PARTICLES_PARAM } from './constants';
import './styles.scss';

const colors = ['black', 'white', 'pink'];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'black',
    };
  }

  changeColor = (colors) => {
    const nextIndex =
      colors.indexOf(this.state.current) === colors.length - 1
        ? 0
        : colors.indexOf(this.state.current) + 1;
    this.setState({ current: colors[nextIndex] });
  };

  render() {
    const { current } = this.state;
    return (
      <section className='app'>
        <section className='app__container'>
          <div className='app__container__items'>
            <button onClick={() => this.changeColor(colors)}>Click</button>
            <Menu />
            <Profile />
            <div className='app__container__items__cards'>
              {colors.map((e) => {
                if (e === current)
                  return (
                    <div className='appear'>
                      <Card color={e} />
                    </div>
                  );
                else
                  return (
                    <div className='disappear'>
                      <Card color={e} />
                    </div>
                  );
              })}
            </div>
          </div>
        </section>
        <Particles className='app__background' params={PARTICLES_PARAM} />
      </section>
    );
  }
}
export default App;
