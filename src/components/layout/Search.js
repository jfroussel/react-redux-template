import React, { Component } from 'react'
import SearchByCategory from './SearchByCategory'

const style = {
    container: {
        backgroundColor: '#e9eaea'
    },
    checkStar: {
        color: '#f56b2a'
    },
    checkLabel: {
        fontSize: 12
    },
    dropdownMenu: {
        left: '-700px',
        width: '69.5rem',
        marginRight: '10.5rem'
    },
    departements: {
        backgroundColor:'#dcdcc3',
    }
}

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentDepartment:'Ile-de-France'
        }
        this.handleChangeDepartement = this.handleChangeDepartement.bind(this)
    }

    handleChangeDepartement(e) {
        this.setState({currentDepartment: e.target.selectedOptions[0].text})
    }

    render() {
        return (
            <div className="container-fluid pt-3 pb-3" style={style.container}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="Que recherchez vous ?" />
                            </div>
                        </div>
                        <div className="col-3">
                            <SearchByCategory />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary btn-block">Rechercher</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 ml-1">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check1" />
                                <label className="form-check-label" htmlFor="check1" style={style.checkLabel}>
                                    Recherche dans le titre uniquement
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check2" />
                                <label className="form-check-label" htmlFor="check2" style={style.checkLabel}>
                                    Annonces <span style={style.checkStar}><i className="fas fa-star"></i>  urgentes</span>  uniquement
                                </label>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="form-group mr-1">
                                <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleChangeDepartement}>
                                    <option value="4">Autour de moi</option>
                                    <option value="1" selected>Ile-de-France</option>
                                    <option value="2">Régions voisines</option>
                                    <option value="3">Toute la France</option>
                                    <option style={style.departements} value="0">-- DEPARTEMENT --</option>
                                    <option value="75"> Paris</option>                                       
                                    <option value="77">Seine-et-Marne</option>                               
                                    <option value="78">Yvelines</option>
                                    <option value="91">Essonne</option>
                                    <option value="92">Hauts-de-Seine</option>
                                    <option value="93">Seine-Saint-Denis</option>
                                    <option value="94">Val-de-Marne</option>
                                    <option value="95">Val-d'Oise</option>                                                                                                        
                                </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-group">
                            <input type="text" className="form-control" id="postalCode" aria-describedby="postalCode" placeholder="Ville ou Code postal" />
                        </div>
                    </div>
                </div>
            </div>
            </div >
        );
    }
}

export default Search;
