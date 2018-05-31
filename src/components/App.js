
import React, { Component } from 'react'
import './App.css'
import Home from './layout/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from '../containers/Product';
import ProductPage from '../components/ProductPage'


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ Home } />
                    <Route path="/list" component={ProductPage} />
                    <Route path="/product/:id" component={Product} />
                </div>
            </Router>
        )
    
    }
}
export default (App)
