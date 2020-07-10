import React, { Component } from 'react';
import './../Styling/navbar.css'
import Image from './../asset/harshit.jpg'
import LOGO from './../asset/logo2.png'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Options: [
        'Notes',
        
      ]
    }
  }

  render() {
    return (
      <>
        <div className="head">
          <button id="button">
            <img src={LOGO} width="75px" height="70px" id="logo"/>
          </button>
          {/* <p >/ <span style={{ color: "grey" }}>Project Name</span></p> */}
          <div id="profile">
            <img id="image1" src={Image} height="50" width="50" />
          </div>

        </div>
        <div className="options">
          {this.state.Options.map(element => {
            return <button id="optionButton">{element}</button>
          })}
        </div>
      </>
    );
  }
}
