import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Mowa from '../containers/Mowa';
import Main from '../containers/Main';

function App() {
    return (
        <Router>
            <div>
                <Route path='*' exact component={Mowa} />
                <Route exact path='/main/' component={Main} />
                {/* <Route path='/users/' component={Users} /> */}
            </div>
        </Router>
    );
}

export default App;
