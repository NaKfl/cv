import React, { Component } from 'react';
import Square from './../../../Square';
import Title from './../../../Title';
import './styles.scss';

export default class ContentAbout extends Component {
  render() {
    return (
      <div className='about'>
        <Title>About Me</Title>
        <div className='about__content'>
          <div className='about__content__row'>
            <Square>
              I am currently a senior student majoring in the faculty of
              Information of Technology at the University of Science in Ho Chi
              Minh city. I am seeking a JAVASCRIPT SOFTWARE ENGINEER
              INTERN/FRESHER position to learn more practical experiences and
              begin my career in a high- level professional environment.
            </Square>
            <Square>okook</Square>
          </div>
        </div>
      </div>
    );
  }
}
