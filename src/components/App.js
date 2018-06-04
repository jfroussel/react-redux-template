
import React, { Component } from 'react'
import './App.css'
import Home from './layout/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from '../containers/Product';
import ProductsPage from '../components/ProductsPage'


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ Home } />
                    <Route path="/list" component={ProductsPage} />
                    <Route path="/product/:id" component={Product} />
                </div>
            </Router>
        )
    
    }
}
export default (App)
