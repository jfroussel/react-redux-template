import React, { Component } from 'react';
import CountriesSelect from '../../containers/CountriesSelect'
import HomeContent from './HomeContent'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeContent />
                <CountriesSelect />
           </div>
        );
    }
}

export default Home;