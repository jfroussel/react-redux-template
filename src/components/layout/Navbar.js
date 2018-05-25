import React, { Component } from 'react';
import Logo from '../../assets/logo.svg'

const style = {
    navbarContainer: {
        paddingRight: 0,
        paddingLeft: 0,
        lineHeight: '30px',

    },
    navbar: {
        backgroundColor: '#f56b2a',
        color: '#FFF',
        fontFamily: "OpenSansSemiBold,sans-serif",

    },
    navbarNav: {
        textTransform: 'uppercase',
        fontSize: '13px',
        fontFamily: "OpenSansSemiBold,sans-serif",
    },
    navItem: {
        color: '#FFF',
        fontFamily: "OpenSansSemiBold,sans-serif",
    },
    navBrand: {
        color: '#FFF',
        fontFamily: "OpenSansSemiBold,sans-serif",
        fontSize: '30px',
        paddingLeft: '150px'
    },
    log: {
        backgroundColor: 'transparent',
        color: '#FFF',
        borderLeft: 'solid 1px #FFF',
        borderRight: 'solid 1px #FFF',
    }
}
const items = ['déposer une annonce', 'offres', 'demandes', 'mes favoris', 'boutiques', 'messages']

class Navbar extends Component {

    render() {
        return (
            <div className="container-fluid " style={style.navbarContainer}>
                <nav className="navbar navbar-light navbar-expand-lg  " style={style.navbar}>
                    <a className="navbar-brand font-weight-bold text-right" href="" style={style.navBrand}>
                        <img src={Logo} width="150" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav pr-5 " style={style.navbarNav}>
                            {
                                items.map((item) => {
                                    console.log(item)
                                    return (
                                        <a className="nav-item nav-link" key={item} href="" style={style.navItem}>{item}</a>
                                    )
                                })
                            }
                        </div>
                        <button className="btn" style={style.log}>
                            <span className="btn pl-1"><i className="fas fa-user"></i></span>
                            <span className="btn pl-1">Se connecter</span>
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
