import React, { Component } from 'react';
import './styles.scss';

export default class Square extends Component {
  render() {
    return <div className='square'>{this.props.children}</div>;
  }
}
