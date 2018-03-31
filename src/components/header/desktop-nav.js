import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DesktopNav extends Component {

//<img src={require('../assets/images/intrologocolor.png')} className="logo" alt="Shanan Almario"/>
  render() {
    return (
      <div className="header">
		<nav>
			<ul class="nav">
				<li className= "animated slideInUp"><NavLink exact to='/' activeClassName="active">About Me</NavLink></li> 
				<li className= "animated slideInUp"><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
				<li className= "animated slideInUp"><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
				<li className= "animated slideInUp"><NavLink to="/hobbies" activeClassName="active">Hobbies</NavLink></li>
				<li className= "animated slideInUp"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
			</ul>
		</nav>
      </div>
    );
  }
}

export default DesktopNav;

/*
*	Debugging Notes:
*		3.28.18: Use of "exact to" so that the home page won't always be active.
*/