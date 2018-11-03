import React, { Component } from 'react';
//import {dialogue} from './assets/dialogue'

export const message = [
    <p>Happy Easter Sharon! I am so Sharon deprived, I don't even know what I'm doing with my life anymore! Just kidding, but not about being Sharon deprived.
    <br />
    <br /> We have known each other for a long time, although we weren't that close throughout more than half of it. We only started getting close about maybe 3 years ago? Then for like the last two years, we were practically inseperable to the point we even hung out together every day during summer. You, remember those studio days right? I totally miss them. We get confused often with being besties, but we're in our own category all together! Other half, buy one get one free, twinsies!

    Although how we ended up getting close kind of sucks, I'm still sorta happy about it happening since I'm not sure if we would be friends the way we are now if it didn't happen. You're such a good friend, and you're so real. You tell me what I don't want to hear because I need to hear it, and send encouragment to me when I'm feeling kind of meh about what I'm doing. 
    <br />
    <br />Thank you, thank you for always being there for me. I hope we can hang out again soon so we can add more to Lottieaaaaaaye make-up. Maybe have another pat pat drink day between ourselves with some Persona 5 and our favorite Strongbow drink... or moonshine for you, LOL.
    <br />
    <br />Live the workaholic life and make those connections so you can find a job faster than me! Hopefully whereever we end up, we'll be close together! If I'm going to follow someone to a city, it's gonna be you!</p>
    ]

//({dialogue}) => (dialogue.path.start.text[0]); //({dialogue}) => (dialogue.path.start.text.map((text, index) => (<p key={index}> {dialogue.path.start.text} </p>)));

//{dialogue.path.start.text[index]}
//        this.place = dialogue.path.middle;
//        this.index=0;
//this.setState({hideButton: true});
class Busy extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: message[0]
    }
  }

  render() {
    return (
      <div className="content-wrapper animated fadeIn">
		  <img src={require('./assets/Miiru.png')} className="miiru-img animated bounce" alt="bunny"/>
		 <div className="about-me-content">
        {this.state.text}
		</div>
      </div>
    );
  }
}

export default Busy;
