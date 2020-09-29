import classnames from 'classnames';
import React, { Component } from 'react';
import Title from '../../../Title';
import './styles.scss';

const works = [
  {
    time: '11/2019 - 03/2020',
    company: 'Hybrid Technologies',
    position: 'Javascript Intern',
    experiences: [
      'Participate in software development activities following Scrum process',
      'Implement software features or fix bugs',
      'Write unit tests and documents',
    ],
  },
  {
    time: '03/2020 - Now',
    company: 'University of Science',
    position: 'Senior student',
    experiences: [
      'Study advanced subjects in web in particular and software in general',
      'Develop and deploy personal projects',
      'Improve English skills',
    ],
  },
];
class ContentWorks extends Component {
  renderList = (works) => {
    return works.map((item, index, array) => {
      return (
        <div
          key={index}
          className={classnames('works__content__timeline__single', {
            works__content__timeline__head: index === 0,
            works__content__timeline__tail: index === array.length - 1,
          })}
        >
          <div className='works__content__timeline__single__time'>
            <p>{item.time}</p>
            <span>{item.company}</span>
          </div>
          <div className='works__content__timeline__single__info'>
            <h4>{item.position}</h4>
            <p>
              {item.experiences.map((experience, pos, arr) => {
                return (
                  (pos !== arr.length - 1 && (
                    <span key={pos}>
                      &sdot; {experience} <br />
                    </span>
                  )) || <span key={pos}>&sdot; {experience}</span>
                );
              })}
            </p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='works'>
        <Title>Experience</Title>
        <div className='works__content'>
          <div className='works__content__timeline'>
            {this.renderList(works)}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentWorks;