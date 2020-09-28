import React, { Component } from 'react';
import Title from '../../../Title';
import './styles.scss';

class ContentWorks extends Component {
  render() {
    return (
      <div className='works'>
        <Title>Experience</Title>
        <div className='works__content'>
          <div className='works__content__timeline'>
            <div className='works__content__timeline__single works__content__timeline__head'>
              <div className='works__content__timeline__single__time'>
                <p>11/2019 - 03/2020</p>
                <span>Hybrid Technologies</span>
              </div>
              <div className='works__content__timeline__single__info'>
                <h4>Javascript Intern</h4>
                <p>
                  &sdot; Participate in software development activities
                  following Scrum process
                  <br />
                  &sdot; Implement software features or fix bugs
                  <br />
                  &sdot; Write unit tests and documents
                </p>
              </div>
            </div>
            <div className='works__content__timeline__single works__content__timeline__tail'>
              <div className='works__content__timeline__single__time'>
                <p>03/2020 - Now</p>
                <span>University of Science</span>
              </div>
              <div className='works__content__timeline__single__info'>
                <h4>Senior student</h4>
                <p>
                  &sdot; Study advanced subjects in web in particular and
                  software in general
                  <br />
                  &sdot; Develop and deploy personal projects
                  <br />
                  &sdot; Improve English skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentWorks;
