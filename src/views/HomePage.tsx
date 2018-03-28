import React from 'react';
import { HomeDto } from '../dtos/HomeDto';

export class Home extends React.Component<HomeDto> {
  render() {
    return (
      <div style={{ backgroundColor: this.props.backgroundColor}}>
        <p>Hello, React! The date is {this.props.currentDate.toLocaleDateString()}</p>
      </div>
    );
  }
}
