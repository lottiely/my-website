import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
		<img src={require('../assets/images/intrologocolor.png')} className="logo" alt="Shanan Almario"/>

		<nav>
			<ul class="nav">
				<li><NavLink exact to='/' activeClassName="active">About Me</NavLink></li> 
				<li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
				<li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
				<li><NavLink to="/hobbies" activeClassName="active">Hobbies</NavLink></li>
				<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
			</ul>
		</nav>
      </div>
    );
  }
}

export default Header;

/*
*	Debugging Notes:
*		3.28.18: Use of "exact to" so that the home page won't always be active.
*/