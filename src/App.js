import React, { Component } from 'react';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          background:
            'linear-gradient(to bottom right, #48b1bf 0%, #0856c1 100%)',
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
export default App;
