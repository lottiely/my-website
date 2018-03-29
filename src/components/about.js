import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="content-wrapper">
		<div className="about-me-content">
			<img src={require('../assets/images/about-me-image.JPG')} className="about-me-image" alt="About Me"/>
			<p>Lorem ipsum dolor sit amet, ei justo partem vivendum eum, ad mel utinam lucilius adolescens. No solet facete perfecto ius, tibique percipitur ei eos. Cu mel nullam suscipiantur, at est link vituperata. Sed ne eius omnis suscipit, vix ex alia assueverit vituperatoribus. At prima maiorum urbanitas pro, modus vocibus noluisse his et.

			Lorem ipsum dolor sit amet, ei justo partem vivendum eum, ad mel utinam lucilius adolescens. No solet facete perfecto ius, tibique percipitur ei eos. Cu mel nullam suscipiantur, at est link vituperata. Sed ne eius omnis suscipit, vix ex alia assueverit vituperatoribus. At prima maiorum urbanitas pro, modus vocibus noluisse his et.</p>
		</div>
      </div>
    );
  }
}

export default About;
