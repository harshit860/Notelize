import React, { Component } from 'react'
import Navbar from './components/Navbar'
import ShowNotes from './components/ShowNotes'
import Show from './Show'
import { Link ,Route, BrowserRouter as Router} from 'react-router-dom';


export default class Main extends Component {
    render() {
        return (

            <Router>
                <div>

                    <Link to="/" ></Link>
                    <Route path="/" component={Show} />
                </div>
            </Router>


        )
    }
}
