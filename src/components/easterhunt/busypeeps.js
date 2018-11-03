import React, { Component } from 'react';
import Password from './assets/password';
//import {dialogue} from './assets/dialogue'

export const dialogue = {
    path:
    {
      busypeeps: 
      {
        text: 
        [
          <p>Hi there! My name is Miiru! 
          <br />
          <br />I am totally not Shanan's original character. If you have a LINE account and think I'm cute, you hould support the artist and buy my sticker set! (Shameless advertising) 
          <br />
          <br />Shanan is probably sleeping because she pulled an all-nighter trying come up with something!</p>,

          <p>So, I'll be the one giving you your Easter greetings! Happy Easter! I'm glad you came! 
          <br />
          <br />Shanan had SOOOOO much planned for this Easter greeting, but her skills in Javascript and React.js still need more time to develop.
          <br />
          <br />Maybe for the next holiday, she'll something fun planned for all of you, but for now, this is all she coudl code up!</p>
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
class Busy extends Component {
  constructor(props){
    super(props);

    this.index=0;
    this.place=dialogue.path.busypeeps;
    this.state = {
      text: dialogue.path.busypeeps.text[this.index],
      hideButton: false
    }
  }

    changeText = () => {
      if(this.place === dialogue.path.busypeeps && this.index === dialogue.path.busypeeps.text.length-1){
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

export default Busy;
