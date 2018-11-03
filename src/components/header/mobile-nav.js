import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MobileNav extends Component {
	constructor(props){
		super(props);
		this.state ={
			isHidden: true
		}

		this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

componentWillMount(){
	document.addEventListener('click', this.handleOutsideClick, false);
}

componentWillUnmount(){
	document.removeEventListener("click", this.handleOutsideClick, false);
}

handleClick = (e) => {
	if(this.node.contains(e.target)){
		this.setState(prevState=> ({
		isHidden: !prevState.isHidden,
	}));
	} else{
		this.handleOutsideClick();
	}
}

handleOutsideClick(e){
	if(this.state.isHidden === false){
		if(this.node.contains(e.target)){
			return
		}
			this.setState(prevState=> ({
		isHidden: !prevState.isHidden,
	}));
		}
}

//<img src={require('../assets/images/intrologocolor.png')} className="logo" alt="Shanan Almario"/>
  render() {

    return (
      <div className="header">

		<nav>
			<ul className="nav">

				<li className="dropdown animated slideInUp"><a ref={node => { this.node = node; }} onClick={this.handleClick}> <span className="caret"></span></a>
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
*		3.30.18: - https://codepen.io/graubnla/pen/EgdgZm?editors=1010 - Referenced to deal with clicking outside of navbar component. Changes made in the code is to remove listener in the componentWillUnmount
*				 - Dropdown kept staying up when dropdown content was clicked, so I changed code to get rid of dropdown list when content is clicked. New reference: https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f
*/
