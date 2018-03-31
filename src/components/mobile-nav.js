import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MobileNav extends Component {
	constructor(){
		super();
		this.state ={
			isHidden: true
		}
	}

toggleHidden(){
	this.setState({
		isHidden: !this.state.isHidden
	})
}

//<img src={require('../assets/images/intrologocolor.png')} className="logo" alt="Shanan Almario"/>
  render() {
    return (
      <div className="header">

		<nav>
			<ul class="nav">

				<li className="dropdown" onClick={this.toggleHidden.bind(this)}><a>Navigation <span className="caret"></span></a>
				{!this.state.isHidden && <Navbar />}
				</li>
			</ul>
		</nav>
      </div>
    );
  }
}

const Navbar = () => (
					<ul className="dropdown-content">
						<li><NavLink exact to='/' activeClassName="active">About Me</NavLink></li>
						<li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
						<li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
						<li><NavLink to="/hobbies" activeClassName="active">Hobbies</NavLink></li>
						<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
					</ul>
				)
export default MobileNav;

/*
*	Debugging Notes:
*		3.28.18: Use of "exact to" so that the home page won't always be active.
*/