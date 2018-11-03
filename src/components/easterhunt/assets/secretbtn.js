import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Secret extends Component {

  render() {
    return (
      <Link to ="/easterhunt"><button className="secretbtn"></button></Link>
    );
  }
}

export default Secret;
