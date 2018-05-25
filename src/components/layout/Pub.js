import React, { Component } from 'react';
import Specimen from '../../assets/specimen.jpg'

const style = {
    card:{
        position: 'relative',
        border: 'solid 2px #f56b2a ',
        padding: 0
    },
    cardRow: {
        backgroundColor: '#f56b2a',
        color: '#FFF',
    },
    cardBody: {
       textAlign: 'center',
       paddingTop: '10px',
       paddingBottom: '15px' 
    },
    price: {
        color: '#f56b2a'
    },
    cardFooter: {
       
    }
}

class Pub extends Component {
    render() {
        return (
            <div className="container" style={style.card}>
               <div style={style.cardRow}>
                    <p className="text-center pt-2 pb-2" style={style.cardTitle}>Annonces à la une</p>
               </div>
               <div style={style.cardBody}>
                    <img src={Specimen} alt=''/>
                    <p className="text-center pt-3 pl-5 pr-5 text-muted" >Gibson USA les Paul Basse Ebony Noire</p>
                    <p className="text-center pl-5 pr-5 font-weight-bold" style={style.price}>1 350 €</p>
               </div>
               <div style={style.cardFooter}>
                    <button className="btn btn-default btn-block text-primary">En savoir plus</button>
               </div>
            </div>
        );
    }
}

export default Pub;