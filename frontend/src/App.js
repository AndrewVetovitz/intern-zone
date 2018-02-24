import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Company from './components/Company/Company';

import Reboot from 'material-ui/Reboot';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Reboot/>
                <Router>
                    <div>
                        <Sidebar/>
                        <div className="offset">
                            <Route exact path="/" component={ Home } />
                            <Route path="/company/:name" component={ Company } />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
