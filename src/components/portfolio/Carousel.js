import React, { Component } from 'react';

const RightArrow = (props) => {
	return(
		<div className="nextArrow">
			<i className = "arrow-right glyphicon glyphicon-chevron-right"></i>
		</div>
		);
}
//export default RightArrow;

const LeftArrow = (props) => {
	return(
		<div className="backArrow">
		<i className="arrow-left glyphicon glyphicon-chevron-left"></i>
		</div>
	);
}
//export default LeftArrow;



class Carousel extends Component {
	constructor(props){
		super(props);

		this.state = {
			slideCount: 0
		};

		//this.nextSlide = this.nextSlide.bind(this);
		//this.previousSlide = this.previousSlide.bind(this);
	}

  render() {
    return (
		<div className="carousel-images">
			<div className="carousel-title">
			<h2>Automated Slack Invite</h2></div>

			<img src={require('./selectedProjects/auto-slack-invite/welcome-screen.PNG')} className="slider-img" alt="welcome screen"/>

			<div className="carousel-title"><h4>Welcome Screen</h4></div>

			<div className="carousel-description"><p>This image is the welcome screen inviting users to join the Hahaga Slack group.<hr /></p></div>
		</div>
    );
  }
}

export default Carousel;
