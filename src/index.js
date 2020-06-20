import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';

const rootElement = document.getElementById('react-app');

render(<div> 
    <React.Fragment>
                 <Navbar />
                <Search />
    </React.Fragment> </div>, rootElement);
