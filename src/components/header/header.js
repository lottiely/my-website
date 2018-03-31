import React, { Component } from 'react';

//importing the different nav views
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

class Header extends Component {
	constructor(props){
		super(props);

		this.state = { width: 0}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

componentDidMount() {
this.updateWindowDimensions();
window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
window.removeEventListener('resize', this.updateWindowDimensions);
}
	updateWindowDimensions(){
		this.setState({width: window.innerWidth});
}

	returnView(){
		if(this.state.width > 620){
			return <DesktopNav />;
		} else{
			return <MobileNav />;
		}
	}

//<img src={require('../assets/images/intrologocolor.png')} className="logo" alt="Shanan Almario"/>
  render() {
    return (
      <div className="header">
		<p className="logo animated fadeIn">Hi, my name is <br />
		Shanan</p>

		{this.returnView()}
      </div>
    );
  }
}

export default Header;

/*
*	Debugging Notes:
*		3.28.18: Use of "exact to" so that the home page won't always be active.
*/