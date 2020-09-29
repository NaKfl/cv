import classnames from 'classnames';
import React, { Component } from 'react';
import Title from '../../../Title';
import './styles.scss';

const projects = [
  {
    name: 'WEB APP HOTEL MANAGEMENT',
    description:
      'Web app online that hotel owners and managers can use to manage the operational and financial functions of their hotel',
    size: 3,
    stack: 'ReactJS, ExpressJS, MySQL, AntDesign',
    link: 'https://github.com/NaKfl/web-quan-ly-khach-san',
  },
  {
    name: 'NGUYEN HUU GIA TRI WEBSITE',
    description: 'Responsive personal website',
    size: 1,
    stack: 'ReactJS, HTML, SCSS',
    link: 'https://github.com/NaKfl/personal-website',
  },
  {
    name: 'WEB APP EKUIPP',
    description:
      'Web app which can sell and buy second-hand equipment (Hybrid Technologies Company)',
    size: 3,
    stack:
      'ReactJS, ExpressJS, Parse, React Admin, Material-UI, Semantic-UI, etc',
    link: 'https://ekuipp.com/',
  },
  {
    name: 'WEB APP ONLINE AUCTION',
    description: 'ReactJS, ExpressJS, MySQL',
    size: 3,
    stack:
      'ReactJS, ExpressJS, Parse, React Admin, Material-UI, Semantic-UI, etc',
    link: 'https://github.com/NaKfl/nodejs-express-online-auction',
  },
  {
    name: 'ANDROID APP TOUR-TRAVEL',
    description:
      "Android app which can create, join tour and track member's location",
    size: 3,
    stack: 'Android (Java)',
    link: 'https://github.com/NaKfl/android-travel-app',
  },
  {
    name: 'UDEMY CLONE LAYOUT',
    description: 'Responsive layout base on Udemy',
    size: 1,
    stack: 'HTML, SASS, Bootstrap4, Javascipt',
    link: 'https://github.com/NaKfl/reponsive-layout-udemy-with-sass',
  },
];

class ContentProject extends Component {
  renderList = (projects) => {
    return projects.map((item, index, array) => {
      return (
        <div
          className={classnames('project__content__timeline__single', {
            project__content__timeline__head: index === 0,
            project__content__timeline__tail: index === array.length - 1,
          })}
        >
          <div className='project__content__timeline__single__info'>
            <div>
              <i className='fa fa-code'></i>
              <h4>{item.name}</h4>
            </div>
            <div className='project__content__timeline__single__info__detail'>
              <div className='project__content__timeline__single__info__detail__single'>
                <strong>Descrip</strong>
                <span>{item.description}</span>
              </div>
              <div className='project__content__timeline__single__info__detail__single'>
                <strong>Team size</strong>
                <span>{`${item.size} member${item.size > 1 ? 's' : ''}`}</span>
              </div>
              <div className='project__content__timeline__single__info__detail__single'>
                <strong>Tech stack</strong>
                <span>{item.stack}</span>
              </div>
              <div className='project__content__timeline__single__info__detail__single project__content__timeline__single__info__detail__link'>
                <strong>
                  <a target='_blank' rel='noopener noreferrer' href={item.link}>
                    Go to Github
                    <i className='fa fa-long-arrow-alt-right'></i>
                  </a>
                </strong>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='project'>
        <Title>Projects</Title>
        <div className='project__content'>
          <div className='project__content__timeline'>
            {this.renderList(projects)}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentProject;
