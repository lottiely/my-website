import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
    	<footer>
      <div className="footer">
      <p>You can find me on social media!</p>
      <span className="social"><a target="_blank" href="https://www.linkedin.com/in/shananalmario/"> <i className="fa fa-linkedin"></i></a> 
      <a target="_blank" href="https://github.com/lottiely"><i className="fa fa-github"></i></a> 
      <a target="_top" href="mailto:saialmario1@gmail.com?Subject=Message%20From%20Your%20Website"><i className="fa fa-envelope"></i></a> </span>
		<p className="copyright">Copyright 2017. </p>
      </div>
      </footer>
    );
  }
}

export default Footer;
