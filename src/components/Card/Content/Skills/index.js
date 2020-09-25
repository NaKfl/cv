import React, { Component } from 'react';
import Antd from './../../../../assets/antd.png';
import Square from './../../../Square';
import Title from './../../../Title';
import './styles.scss';

export default class ContentSkills extends Component {
  render() {
    return (
      <div className='skills'>
        <Title>Programming Languages</Title>
        <div className='skills__content'>
          <div className='skills__content__row'>
            <Square>
              <i className='devicon-html5-plain colored' />
              <p>HTML</p>
            </Square>
            <Square>
              <i className='devicon-css3-plain colored'></i>
              <p>CSS/SASS</p>
            </Square>
          </div>
          <div className='skills__content__row'>
            <Square end>
              <i className='devicon-javascript-plain colored'></i>
              <p>JavaScript</p>
            </Square>
            <Square end>
              <i className='devicon-python-plain colored'></i>
              <p>Python</p>
            </Square>
          </div>
        </div>

        <Title>Frameworks & Platforms</Title>
        <div className='skills__content'>
          <div className='skills__content__row'>
            <Square>
              <i className='devicon-react-original colored'></i>
              <p>React</p>
            </Square>
            <Square>
              <i className='devicon-nodejs-plain colored'></i>
              <p>Express</p>
            </Square>
          </div>
          <div className='skills__content__row'>
            <Square end>
              <img src={Antd} width={55} alt='Ant design' />
              <p>Ant Design</p>
            </Square>
            <Square end>
              <i className='devicon-bootstrap-plain colored'></i>
              <p>Bootstrap</p>
            </Square>
          </div>
        </div>

        <Title>Database Management Systems</Title>
        <div className='skills__content'>
          <div className='skills__content__row'>
            <Square end>
              <i className='devicon-mysql-plain colored'></i>
              <p>MySQL</p>
            </Square>
            <Square end>
              <i className='devicon-mongodb-plain colored'></i>
              <p>MongoDB</p>
            </Square>
          </div>
        </div>

        <Title>Version Control</Title>
        <div className='skills__content'>
          <div className='skills__content__row'>
            <Square end>
              <i className='devicon-git-plain colored'></i>
              <p>Git</p>
            </Square>
            <Square end>
              <i className='devicon-github-plain colored'></i>
              <p>GitHub</p>
            </Square>
          </div>
        </div>
      </div>
    );
  }
}
