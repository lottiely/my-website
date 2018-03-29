import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="content-wrapper">
      <img src={require('../assets/images/about-me-image.JPG')} className="about-me-image" alt="About Me"/>
		<div className="about-me-content">
			<p>I love food and trying new things!
      <br />
      <br />
      I am a small town girl trying to find a place in the big city. 
      I am currently in the Bay Area on the hunt for my new favorite boba place. 
      I recently graduated from the University of Alaska Anchorage with a Bachelor's of Science in Computer Systems Engineering, and I am currently exploring opportunities to enter the tech industry. 
      Topics where I have taken particular interest are front-end engineering and machine learning!
      <br />
      <br />
      But when I'm not coding away, I am a baker, figure skater, artist, fiction writer, casual gamer, and fashion enthusiast.</p>
		</div>
      </div>
    );
  }
}

export default About;
