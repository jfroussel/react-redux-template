
import React, { Component } from 'react'
import './App.css'
import Home from './layout/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from '../containers/Details';
import Leboncoin from '../containers/Leboncoin'


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ Home } />
                    <Route path="/list" component={Leboncoin} />
                    <Route path="/details" component={Details} />
                </div>
            </Router>
        )
    
    }
}
export default (App)
