import React, { Component } from 'react';
import './styles.scss';

class Title extends Component {
  render() {
    const { children } = this.props;
    const [firstWord, ...rest] = children.split(' ');
    return (
      <div className='title'>
        <span>{firstWord}</span>
        {' ' + rest.join(' ')}
      </div>
    );
  }
}

export default Title;
