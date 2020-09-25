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
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/o0liebeo0o/'
              >
                <i className='fab fa-facebook'></i>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/NaKfl'
              >
                <i className='fab fa-github'></i>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/nguyen-huu-gia-tri-16225a1a1/'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </section>
          <section className='profile__buttons'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.topcv.vn/xem-cv/c82e29e2ee2a244bdd06bfea23082e8b'
            >
              <button className='profile__buttons__single profile__buttons__single--before'>
                <span>DOWNLOAD CV</span>
                <i className='fa fa-download'></i>
              </button>
            </a>

            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/nguyen-huu-gia-tri-16225a1a1/'
            >
              <button className='profile__buttons__single'>
                <span>CONTACT ME</span>
                <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </a>
          </section>
        </section>
      </div>
    );
  }
}

export default index;
