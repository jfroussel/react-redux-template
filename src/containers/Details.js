import React, { Component } from 'react';
import SlideShow from '../components/layout/SlideShow'
import Descriptions from '../components/layout/Descriptions'
import Geoloc from '../components/layout/Geoloc'
import ToolsBox from '../components/layout/Toolsbox'
import Navbar from '../components/layout/Navbar'

class Details extends Component {
    
    render() {
        return (
            <div className="grid">
            <Navbar />
                <div className="row">
                    <div className="col-8">
                        <SlideShow />
                        <Descriptions />
                        <Geoloc />
                    </div>
                    <div className="col-4">
                        <ToolsBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
