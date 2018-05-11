import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCountries, restCountries } from '../actions'

class CountriesSelect extends Component {

    componentWillMount() {
      this.props.getCountries()
      this.props.restCountries()
    }
    
    renderSelect() {
        const { countries } = this.props
       
        if(countries) {
            return (
                <select className="col-lg-6 form-control form-control-lg">
                    {
                        countries.map((country) => (
                            <option key={ country } value={ country }>{ country }</option>
                        ))
                    }
                </select>
            )
        } else {
            return <div>No country found ...</div>
        }
    }

    renderRestCountries() {
        const { pays } = this.props
       
        if(pays) {
            return (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>flag</td>
                            <td>name</td>
                            <td>alpha 2 code</td>
                            <td>alpha 3 code</td>
                            <td>population</td>
                        </tr>
                    </thead>
                    <tbody>
                        { pays.map((country) => {
                            return (
                                <tr key={country.name}>
                                    <td><img src={country.flag} width="50" alt="" /></td>
                                    <td>{country.name}</td>
                                    <td>{country.alpha2Code}</td>
                                    <td>{country.alpha3Code}</td>
                                    <td>{new Intl.NumberFormat().format(country.population)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> 
            )
        } else {
            return 'errors'
        }
    }
    
    render() {
        return (
            <div>
               
                { this.renderSelect() }
                <br />
                { this.renderRestCountries()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        pays: state.restCountries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getCountries, restCountries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSelect);