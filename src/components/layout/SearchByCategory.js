import React, { Component } from 'react';
import { maison, services, materiels, loisirs, multimedia, vacances, immobilier, vehicules } from '../../Constants'

const style = {
    dropdownMenu: {
        left: '-700px',
        width: '69.5rem',
        marginRight: '10.5rem'
    },
    title: {

        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#336699',
        fontWeight: 400,
        fontSize: '14px',
        padding: '5px ',
        backgroundColor: '#e9eaea'
    },
    categoryBtn: {
        minWidth: '100%'
    },
    categoryUl: {
        paddingLeft: 0
    },
    categoryLi: {
        listStyleType: 'none',
        fontSize: '14px',
        textAlign: 'left'
    }
}

class SearchByCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorySelected: 'Selectionnez une categorie'
        }
        this.handleCategorySelected = this.handleCategorySelected.bind(this)
        this.renderListItems = this.renderListItems.bind(this)
    }

    handleCategorySelected(e) {
        console.log('current target : ', e.currentTarget.text)
        this.setState({ categorySelected: e.currentTarget.text })
        e.preventDefault()
    }

    renderListItems(items) {
        return (
            items.map((item) => {
                return (
                    <li key={item.value} style={style.categoryLi}>
                        <a className="text-muted" href="" onClick={this.handleCategorySelected} >{item.label}</a>
                    </li>
                )
            })
        )
    }

    render() {

        return (
            <div>
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" style={style.categoryBtn} href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.categorySelected}
                    </a>
                    <div className="dropdown-menu" style={style.dropdownMenu} aria-labelledby="dropdownMenuLink">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>toutes categories</a></p>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>emploi</a></p>
                                    <ul style={style.categoryUl}>
                                        <li style={style.categoryLi} ><a className=" text-muted" href="" onClick={this.handleCategorySelected}  >Offres d'emploi</a></li>
                                        <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Offres d'emploi cadre</a></li>
                                    </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>vehicules</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(vehicules) }
                                    </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>immobilier</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(immobilier) }
                                    </ul>
                                </div>
                                <div className="col">
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>vacances</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(vacances) }
                                    </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>multimedia</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(multimedia) }
                                    </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>loisirs</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(loisirs) }
                                    </ul>
                                </div>
                                <div className="col">
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>materiel professionnel</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(materiels) }
                                    </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>services</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(services) }
                                    </ul>
                                </div>
                                <div className="col">
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>maison</a></p>
                                    <ul style={style.categoryUl}>
                                        { this.renderListItems(maison) }
                                    </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>autres</a></p>
                                    <ul style={style.categoryUl}>
                                        <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Autres</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchByCategory;