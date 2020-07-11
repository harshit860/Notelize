import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import {Provider} from 'react-redux'
import Reducerdata from './Redux/reducer'
import {createStore} from 'redux'
import ShowNotes from './components/ShowNotes';
import { Link ,Route, BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';

const ReduxStore = createStore(Reducerdata)


const rootElement = document.getElementById('react-app');

render(<div> 
    <React.Fragment>
        <Provider store={ReduxStore}>
                
                <Router>
                <div>
                    
                    <Link to="/" ></Link>
                    <Route path="/" component={Main} />
                </div>
                </Router>
                
        </Provider>
    </React.Fragment> </div>, rootElement);
