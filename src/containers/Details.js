import React, { Component } from 'react';
import SlideShow from '../components/layout/SlideShow'
import Descriptions from '../components/layout/Descriptions'
import Geoloc from '../components/layout/Geoloc'
import ToolsBox from '../components/layout/Toolsbox'
import Navbar from '../components/layout/Navbar'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"

class Details extends Component {
    
    render() {
        return (
            <div className="grid">
            <Navbar />
                <div className="container">
                    <div className="row pt-3">
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
            </div>
        );
    }
}

export default Details;
