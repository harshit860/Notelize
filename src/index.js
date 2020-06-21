import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import {Provider} from 'react-redux'
import Reducerdata from './Redux/reducer'
import {createStore} from 'redux'
import ShowNotes from './components/ShowNotes';

const ReduxStore = createStore(Reducerdata)


const rootElement = document.getElementById('react-app');

render(<div> 
    <React.Fragment>
        <Provider store={ReduxStore}>
                <Navbar />
                <Search />
                <ShowNotes />
        </Provider>
    </React.Fragment> </div>, rootElement);
