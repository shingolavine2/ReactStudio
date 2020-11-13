import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        available: 1
      };
      this.makeAvailable = this.makeAvailable.bind(this);
  }
  makeAvailable() {
    this.setState({
      available: this.state.available + 1
    });
  }
  render() {
    return (
      <div>
        <h1>{this.props.plant}</h1>
        <br />
        <p>There are {this.state.available} availale</p>
        <hr />
        <button onClick={this.makeAvailable}>Make 1 More Available</button>
      </div>
    );
  }
}