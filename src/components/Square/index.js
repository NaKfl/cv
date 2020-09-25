import React, { Component } from 'react';
import './styles.scss';

export default class Square extends Component {
  render() {
    const { end } = this.props;
    if (end) return <div className='square end'>{this.props.children}</div>;
    else return <div className='square'>{this.props.children}</div>;
  }
}
