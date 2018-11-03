import React, { Component } from 'react';
import Password from './assets/password';
//import {dialogue} from './assets/dialogue'

export const dialogue = {
    path:
    {
      start: 
      {
        text: 
        [
          <p>Hi there! My name is Miiru! 
          <br />
          <br />I am totally not Shanan's original character. If you have a LINE account and think I'm cute, you hould support the artist and buy my sticker set! (Shameless advertising) 
          <br />
          <br />Shanan is probably sleeping because she pulled an all-nighter trying come up with something!
          <br />
          <br />So, I'll be the one giving you your Easter greetings! Happy Easter! I'm glad you came! </p>,

          <p>Shanan had SOOOOO much planned for this Easter greeting, but her skills in Javascript and React.js still need more time to develop.
          <br />
          <br />You were all supposed to go on a really elaborate Easter hunt online, but she spent all night agonizing over a semi-colon. Maybe you'll get to do that for the next holiday coming up!
          <br />
          <br />She apologizes for sending this so late on Easter day. Most of you all are reading this after the day has passed. That's alright. I won't tell her.</p>,

          <p>Well, maybe next holiday, she'll have something better prepared for you guys! Or she'll just get lazy and forget... 
          <br />
          <br />Anyways, enough of my rambling! Let's get on with her Easter greeting! Whoooooo!</p>
        ]
      }, 
      password: 
      {
        text: [<Password />] 
      }
    }
  };

//({dialogue}) => (dialogue.path.start.text[0]); //({dialogue}) => (dialogue.path.start.text.map((text, index) => (<p key={index}> {dialogue.path.start.text} </p>)));

//{dialogue.path.start.text[index]}
//        this.place = dialogue.path.middle;
//        this.index=0;
//this.setState({hideButton: true});
class Start extends Component {
  constructor(props){
    super(props);

    this.index=0;
    this.place=dialogue.path.start;
    this.state = {
      text: dialogue.path.start.text[this.index],
      hideButton: false
    }
  }

    changeText = () => {
      if(this.place === dialogue.path.start && this.index === dialogue.path.start.text.length-1){
        this.place = dialogue.path.password;
        this.index=0;
        this.setState({hideButton: true});
        this.setState({text: this.place.text[this.index]}, () =>({text: this.place.text[this.index]}));
      }
        else{
        this.index++;
        this.setState({text: this.place.text[this.index]}, () =>({text: this.place.text[this.index]}));
      }
    }

  render() {
    return (
      <div className="content-wrapper animated fadeIn">
		  <img src={require('./assets/Miiru.png')} className="miiru-img animated bounce" alt="bunny"/>
		 <div className="about-me-content">
        {this.state.text}
        <button className={this.state.hideButton ? "hidden" : "nextbtn"} onClick={this.changeText}>Next</button>
		</div>
      </div>
    );
  }
}

export default Start;
