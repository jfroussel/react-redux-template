import React, { Component } from 'react';
import ProductSlideShow from '../components/layout/ProductSlideShow'
import ProductDescription from '../components/layout/ProductDescription'
import ProductLocation from '../components/layout/ProductLocation'
import ProductActions from '../components/layout/ProductActions'
import Navbar from '../components/layout/Navbar'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {}

    }

    componentWillMount() {
        console.log(this.props.location.pathname)
    }
    
    render() {
        return (
            <div className="grid">
            <Navbar />
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-8">
                            <ProductSlideShow />
                            <ProductDescription />
                            <ProductLocation />
                        </div>
                        <div className="col-4">
                            <ProductActions />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
