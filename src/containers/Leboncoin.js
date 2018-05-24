import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar'
import Search from '../components/layout/Search'
import Content from '../components/layout/Content'

class Leboncoin extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            
            <div className="grid"> 
                <Navbar />
                <Search />
                <Content />
            </div>
        );
    }
}

export default Leboncoin;
