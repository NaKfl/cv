import React, { Component } from 'react';
import Title from './../../../Title';
import './styles.scss';

export default class ContentAbout extends Component {
  render() {
    return (
      <div className='about'>
        <Title>About Me</Title>
        <div className='about__content'>
          <div className='about__content__row'>
            <div className='about__content__row__col'>
              I am currently a senior student majoring in the faculty of
              Information of Technology at the University of Science HCM. I am
              seeking a WEB DEVELOPER INTERN/FRESHER position to learn more
              practical experiences and begin my career in a high-level
              professional environment.
            </div>
            <div className='about__content__row__col about__content__row__info'>
              <div>
                <strong>DOB</strong>
                <span>12/06/1999</span>
              </div>
              <div>
                <strong>Gender</strong>
                <span>Male</span>
              </div>
              <div>
                <strong>Phone</strong>
                <span>0931467534</span>
              </div>
              <div>
                <strong>Address</strong>
                <span>District 8, HCM</span>
              </div>
            </div>
          </div>
        </div>

        <Title>Education</Title>
        <div className='about__content'>
          <div className='about__content__row'>
            <div className='about__content__row__col about__content__row__university'>
              <div className='about__content__row__university__name'>
                <span>University of Science HCM</span>
              </div>
            </div>
            <div className='about__content__row__col about__content__row__info'>
              <div>
                <strong>Major</strong>
                <span>Software Engineering</span>
              </div>
              <div>
                <strong>GPA</strong>
                <span>8.4/10 (Now)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
