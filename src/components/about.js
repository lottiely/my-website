import React, { Component } from 'react';

class About extends Component {

//  <img src={require('../assets/images/about-me-image.JPG')} className="about-me-image" alt="About Me"/>
  render() {
    return (
      <div className="content-wrapper animated fadeIn">
		<div className="about-me-content">
			<h3>Hello, my name is Shanan.</h3>
      <p>
      <br />
      <br />
      I am a junior front-end engineer from Anchorage, Alaska and currently based in San Jose.
      <br />
      <br />
      I like to do artsy things, bake, and figure skate.
      <br />
      <br />
      It's pretty tough trying to summarize me and what I do,
      so if you want to know more, you can always <a target="_top" rel="nofollow" href="mailto:saialmario1@gmail.com?Subject=Message%20From%20Your%20Website"> email</a> me. </p>
    </div>
      </div>
    );
  }
}

export default About;
