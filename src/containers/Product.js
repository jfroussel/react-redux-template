import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readProduct, phoneNumber } from '../actions'
import ProductDescription from '../components/layout/ProductDescription'
import ProductLocation from '../components/layout/ProductLocation'
import ProductActions from '../components/layout/ProductActions'
import Navbar from '../components/layout/Navbar'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import ProductSlide from '../components/layout/ProductSlide'


class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
       
        const id = this.props.match.params.id
        this.props.readProduct(id)
        this.props.phoneNumber(id)
    }

    
    render() {
        
       
        return (
            <div className="grid">
            <Navbar />
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-8">
                            <ProductSlide product={this.props.product} />
                            <ProductDescription product={this.props.product} />
                            <ProductLocation />
                        </div>
                        <div className="col-4">
                            <ProductActions product={this.props.product} phoneNumber={this.props.phoneNumber} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.activeProduct,
        phoneNumber: state.phoneNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ readProduct, phoneNumber }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
