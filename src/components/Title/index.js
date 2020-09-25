import React, { Component } from 'react';
import './styles.scss';

class Title extends Component {
  render() {
    const { children } = this.props;
    const [firstWord, ...rest] = children.split(' ');
    return (
      <div className='title'>
        {(rest.length > 0 && (
          <div>
            <span>{firstWord}</span>
            {' ' + rest.join(' ')}
          </div>
        )) || (
          <div>
            <span>{firstWord[0]}</span>
            {firstWord.slice(1)}
          </div>
        )}
      </div>
    );
  }
}

export default Title;
