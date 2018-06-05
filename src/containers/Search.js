import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { categorySelected } from '../actions'
import SearchByCategory from '../components/SearchByCategory'
import { departements } from '../Constants'

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
        backgroundColor: '#dcdcc3',
    },
}

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentDepartment: 12,
            query: '',
        }
        this.handleChangeDepartement = this.handleChangeDepartement.bind(this)
    }


    componentWillMount() {
        this.props.categorySelected()
    }

    handleChangeDepartement(e) {
        this.setState({ currentDepartment: e.target.selectedOptions[0].text })
    }

    handleChangeQuery(e) {
        console.log('RENDER QUERY : ', e.target.value)
        return this.setState({ query: e.target.value })
    }

    handleClick(state) {
        return console.log(('HANDLE CLICK',this.state))
    }

    render() {

        return (
            <div className="container-fluid pt-3 pb-3" style={style.container}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="search"
                                    aria-describedby="search"
                                    placeholder="Que recherchez vous ?"
                                    onChange={(e) => this.handleChangeQuery(e)}
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <SearchByCategory />
                        </div>
                        <div className="col-3">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick()}
                                >Rechercher</button>
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
                                    {
                                        departements.map((item) => {
                                            return (
                                                <option key={item.value} value={item.value}>{item.label}</option>
                                            )
                                        })
                                    }
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

const mapStateToProps = (state) => {
    return {
        categorySelected: state.categorySelected,

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ categorySelected }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

