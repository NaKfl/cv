import React, { Component } from 'react';
import './styles.scss';

class index extends Component {
  render() {
    return (
      <>
        <section className='profile'>
          <section>
            <div className='profile__avatar'></div>
            <div className='profile__info'>
              <h4>Nguyen Huu Gia Tri</h4>
              <span>Web developer</span>
              <div className='profile__info__icon'></div>
            </div>
          </section>
          <section className='profile__buttons'>
            <button className='profile__buttons__single'>DOWNLOAD CV</button>
            <button className='profile__buttons__single'>CONTACT ME</button>
          </section>
        </section>
      </>
    );
  }
}

export default index;
