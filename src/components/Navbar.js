import React, { Component } from 'react';
import './../Styling/navbar.css'
import Image from './../asset/harshit.jpg'

export default class Navbar extends Component {
      constructor(props){
        super(props)
      this.state = {
              Options :[
                'Notes',
                'Web-Links',
                'List'
              ]
      }
    }

  render() {
    return (
      <>
      <div className="head">
        <button id="button">{'--Menu--'}</button>
        <h1 >Notelize / <span style={{ color: "grey" }}>Project Name</span></h1>
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
