import React, { Component } from 'react';
import './styles.scss';

class index extends Component {
  render() {
    return (
      <div>
        <section className='profile'>
          <section>
            <div>
              <div className='profile__avatar'></div>
              <div className='profile__info'>
                <h4>Nguyen Huu Gia Tri</h4>
                <span>Web developer</span>
                <div className='profile__info__icon'></div>
              </div>
            </div>
            <div className='profile__icons'>
              <a target='_blank' href='https://www.facebook.com/o0liebeo0o/'>
                <i class='fab fa-facebook'></i>
              </a>
              <a target='_blank' href='https://github.com/NaKfl'>
                <i class='fab fa-github'></i>
              </a>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/nguyen-huu-gia-tri-16225a1a1/'
              >
                <i class='fab fa-linkedin'></i>
              </a>
            </div>
          </section>
          <section className='profile__buttons'>
            <button className='profile__buttons__single profile__buttons__single--before'>
              <span>DOWNLOAD CV</span>
              <i class='fa fa-download'></i>
            </button>
            <button className='profile__buttons__single'>
              <span>CONTACT ME</span>
              <i class='fa fa-long-arrow-alt-right'></i>
            </button>
          </section>
        </section>
      </div>
    );
  }
}

export default index;
