 import React, { Component } from 'react';

import $ from 'jquery'
import { Link } from 'react-router-dom';

export const participants ={
  passwords: ["twinsies", "besties", "hesmydade_e", "movebetch", "bigbrooo", "toiletregret", "urnotuseless", "istilloweapicture", "seestah", "hernameisellie", "bestmentor", "thankyouate", "thebros", "dangerousspanktopia", "4everwatching", "pangitbuhok"],
  people:["Sharon", "Marianne","Xavier","Joben","Banky", "Eric","Felix", "Christa", "Hannah", "Erin", "Marj", "Cousins", "Forever", "Alexi"],
}

class Password extends Component {
  constructor(props){
    super(props);

    this.state = {
      hideButton: false,
      showButton: false,
      data: "",
      message: "Please enter your password to move on: ",
      image: false
    }
    this.updateState =this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    var arr = participants.people;
    var password = this.state.data;
    var name;

   if($.inArray(this.state.data, participants.passwords) >=0){
      for(var i = 0; i < participants.passwords.length; i++){
          if(password.match(participants.passwords[i])){
              name = participants.people[i];
          }
      }
      var newlink = "/easterhunt/" + name;
      newlink = newlink.toLowerCase();
      this.setState({data: newlink.toLowerCase().value});
      {console.log(newlink)}
      {console.log(this.state.data)}
      this.setState({message: "Thanks! Ready for your message from Shanan?", hideButton: true, showButton:true});
      {console.log(this.state.data)}
    }else{
      this.setState({message: "Invalid Password. Please try again."});
    }
  }

  updateState(e){
    this.setState({data: e.target.value});
  }

  dbutt = () => {
      this.setState({message: "Happy Easter! I had to hold back your messages because development issues, but here is DickButt for consolation. \n Love, Shanan", image: true, showButton: false});
    }


  render() {
    return (
     <div>
     <img src={require('./DButt.jpg')} className={this.state.image ? "show about-me-image animated bounce" : "hidden" } alt="dbutt"/>
     <div className = "about-me-content"><p>{this.state.message}</p></div>
     <form onSubmit={this.handleSubmit}>
     <input className={this.state.hideButton ? "hidden" : "inputbox"} type = "password" value = {this.state.value} onChange = {this.updateState} />
     <button className={this.state.hideButton ? "hidden" : "nextbtn"}>Submit</button>
     </form>
     <button className={this.state.showButton ? "show returnbtn" : "hidden" } onClick={this.dbutt}>Next</button>

     </div>
    );
  }
}

export default Password;
