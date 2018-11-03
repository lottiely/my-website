import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className="content-wrapper animated fadeIn">
    <div className="resume-content">
    <h3>Education</h3>
    <h4>University of Alaska Anchorage</h4>
    <p><i>Graduated May 2017</i></p>
      <p>Bachelor’s degree in Science for Computer Systems Engineering, minor in Computer Science 
      <br />
      <br />
      <b>Relevant Coursework</b>
      <br />Software engineering, computer graphics, machine learning, artificial intelligence, database systems, android programming, object-oriented programming, operating systems, computer networks, computer architecture, digital circuit design, electronic devices</p>
      <hr />

       <h3>Experience</h3>
    <h4>FASTER Front-End Engineering Intern</h4>
    <p><i>January 2018 - Present</i>
    <br />
    <a href="http://fastersv.org/">fastersv.org</a>
    <br /></p>
    <ul>
    <li>Regularly update, create, and test front-end engineering and UX design changes to Filipino American Tech Professional Association website in HTML, CSS, and JS. Implemented new information architecture to improve overall user experience of website.</li>
    <li>Slated to convert website with ReactJS and Flux datastore for more dynamic operability.</li>
    </ul>
    <hr />

    <h3>Projects</h3>
    <p>Please refer to <a href="/portfolio" target="_blank" rel="noopener noreferrer">portfolio</a> section.</p>
    <hr />

    <h3>Skills and Abilities</h3>
    <ul>
    <li><b>Languages: </b> Java, JavaFX/Swing, Javascript, C++, Python, SQL, HTML/CSS, MIPS assembly language, VHDL, PHP</li>
    <li><b>Operating Systems: </b> Windows(7, 8, 10), Linux</li>
    <li><b>Databases: </b> MS Access, MongoDB</li>
    <li><b>Tools: </b> Git, Microsoft Visual Studios, Eclipse, NetBeans, WordPress, Microsoft Office (MS Word, Excel, PowerPoint)</li>
    <li><b>Libraries: </b>OpenGL with Angel (6th Ed), OpenCV(beginner), ReactJS</li>
    </ul>
    <hr />

    <p>Want to see more? There's also my <a href="https://linkedin.com/in/shananalmario/" target="_blank" rel="noopener noreferrer">LinkedIn</a> page!</p>
    </div>
      </div>
    );
  }
}

export default Resume;
