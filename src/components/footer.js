import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <span className="social"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shananalmario/"> <i className="fa fa-linkedin"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/lottiely"><i className="fa fa-github"></i></a>
      <a target="_top" href="mailto:saialmario1@gmail.com?Subject=Message%20From%20Your%20Website"><i className="fa fa-envelope"></i></a> </span>
		<p className="copyright">Copyright 2017. All Rights Reserved.</p>
      </div>
    );
  }
}

export default Footer;
