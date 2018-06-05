import React, { Component } from 'react';
import lbc from '../../assets/lbc.png'

const style = {

}

class ProductChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seller: this.props.product.seller,
            user: 'Moi',
            message: ''
        }
        this.handleClickMessage = this.handleClickMessage.bind(this)
    }


    componentWillMount() {
        console.log('chatbox : ', this.props)
    }

    handleClickMessage(message) {
        if (message) {
            return (
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Votre message ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button">{this.state.user}</button>
                    </div>
                </div>
            )
        } else {
            return 'message vide'
        }
    }

    handleChangeQuery(e) {
        console.log('RENDER QUERY : ', e.target.value)
        return this.setState({ message: e.target.value })
    }

    render() {
        return (
            <div className="row" >
                <div className="container-fluid text-left pb-5 ">
                    <span className="font-weight-light">{`Le vendeur ${this.state.seller} est disponible pour dialoguer avec vous.`}</span>
                </div>
                {`User : ${this.state.message}`}
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Votre message ..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => this.handleChangeQuery(e)}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => this.handleClickMessage(this.state.message)}
                        >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductChatBox;
