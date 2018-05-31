import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget'
import 'react-chat-widget/lib/styles.css';
import lbc from '../../assets/lbc.png'


class ProductChatBox extends Component {
   
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        const response = 'test response'
        addResponseMessage(response);
    }

    render() {
        return (
            <div>
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    profileAvatar={lbc}
                    title="My new awesome title"
                    subtitle="And my cool subtitle"

                />
            </div>
        );
    }
}

export default ProductChatBox;
