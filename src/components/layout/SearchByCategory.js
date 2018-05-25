import React, { Component } from 'react';
import {maison, services, materiels, loisirs} from '../../Constants'

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
        padding : '5px ',
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
    }

    handleCategorySelected(e) {
        
        console.log('current target : ', e.currentTarget.text)
        this.setState({categorySelected:e.currentTarget.text})
        e.preventDefault()
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
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Voitures</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Motos</a></li>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Caravaning</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" >Utilitaires</a></li>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Equipement Auto</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" >Equipement Moto</a></li>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Equipement Caravaning</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" >Nautisme</a></li>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Equipement Nautisme</a></li>
                                        </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>immobilier</a></p>
                                        <ul style={style.categoryUl}>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Ventes immobilieres</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Immobilier neuf</a></li>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Locations</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Colocations</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Bureaux & Commerces</a></li>
                                        </ul>
                                </div>
                                <div className="col">
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>vacances</a></p>
                                        <ul style={style.categoryUl}>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Locations & Gites</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Chambres d'hôtes</a></li>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Camping</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Hôtels</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Hébergements insolites</a></li>
                                        </ul>
                                        <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>multimedia</a></p>
                                        <ul style={style.categoryUl}>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Informatique</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Consoles & Jeux video</a></li>
                                            <li style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >Image & Son</a></li>
                                            <li style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >Téléphonie</a></li>
                                        </ul>
                                        <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>loisirs</a></p>
                                        <ul style={style.categoryUl}>
                                            {
                                                loisirs.map((item) => {
                                                    return (
                                                        <li key={item.value} style={style.categoryLi}><a className="text-muted" href="" onClick={this.handleCategorySelected} >{item.label}</a></li>
                                                    )
                                                })
                                            }                                        
                                        </ul>      
                                </div>
                                <div className="col">
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>materiel professionnel</a></p>
                                        <ul style={style.categoryUl}>
                                            {
                                                materiels.map((item) => {
                                                    return (
                                                        <li key={item.value} style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >{item.label}</a></li>
                                                    )
                                                })
                                            }                                        
                                        </ul>
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>services</a></p>
                                        <ul style={style.categoryUl}>
                                            {
                                                services.map((item) => {
                                                    return (
                                                        <li key={item.value} style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >{item.label}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>   
                                </div>
                                <div className="col">
                                    <p><a type="button" className="btn btn-primary btn-block" href="" onClick={this.handleCategorySelected} style={style.title}>maison</a></p>
                                        <ul style={style.categoryUl}>
                                            {
                                                maison.map((item) => {
                                                    return (
                                                        <li key={item.value} style={style.categoryLi}><a className=" text-muted" href="" onClick={this.handleCategorySelected} >{item.label}</a></li>
                                                    )
                                                })
                                            }        
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