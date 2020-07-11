    import React, { Component } from 'react'
import Navbar from './components/Navbar'
import ShowNotes from './components/ShowNotes'
    
    export default class Main extends Component {
        render() {
            return (
                <div>
                    <Navbar />
                    <ShowNotes />
                </div>
            )
        }
    }
    