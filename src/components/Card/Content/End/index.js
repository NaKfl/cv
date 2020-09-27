import React, { Component } from 'react';
import ThanksImage from './../../../../assets/thank.gif';
import Square from './../../../Square';
import Title from './../../../Title';
import './styles.scss';

class ContentEnd extends Component {
  render() {
    return (
      <div className='end'>
        <Title>The End</Title>
        <div className='end__content'>
          <div className='end__content__row'>
            <Square>
              Finally, I would like to say "Thank You" for spent time to look at
              my website.
            </Square>
          </div>
          <div className='end__content__row end__content__thanks'>
            <Square end>
              <img src={ThanksImage} alt='Thank you' />
            </Square>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentEnd;
