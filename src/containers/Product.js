import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readProduct, readPhoneNumber } from '../actions'
import ProductDescription from '../components/layout/ProductDescription'
import ProductLocation from '../components/layout/ProductLocation'
import ProductActions from '../components/layout/ProductActions'
import Navbar from '../components/layout/Navbar'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import ProductSlide from '../components/layout/ProductSlide'


class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countImages: ''
        }
    }

    componentWillMount() {
        const id = this.props.match.params.id
        this.props.readProduct(id)
        this.props.readPhoneNumber(id)
    }

    render() {
        const { product, phoneNumber } = this.props
        return (
            <div className="grid">
                <Navbar />
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-8">
                            <ProductSlide product={product}/>
                            <ProductDescription product={product} />
                            <ProductLocation />
                        </div>
                        <div className="col-4">
                            <ProductActions product={product} phoneNumber={phoneNumber} />
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
    return bindActionCreators({ readProduct, readPhoneNumber }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
