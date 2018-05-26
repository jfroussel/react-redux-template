import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLBC } from '../../actions'

class ContentList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        this.props.getLBC()
    }

    renderLBC() {
        const { lbc } = this.props
        const style = {
            row: {
                borderBottom: 'solid 1px #efeded',
                borderLeft: 'solid 1px #efeded',
                borderRight: 'solid 1px #efeded',
            },
            imgContainer: {
                width: '200px',
                height: '150px',
                backgroundColor: '#efeded',
                margin: '10px',
                display: 'inline-block',
                float: 'left',
                position: 'relative',
            },
            img: {
                maxWidth: '100%',
                maxHeight: '100%',
                margin: 'auto',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            content: {
                paddingTop: '15px'
            },
            title: {
                fontSize: '1rem',
                color: '#369',
                fontFamily: "'OpenSansSemiBold',sans-serif",
                fontWeight: 600,
            },
            location: {
                fontWeight: 100,
                fontSize: '0.8rem',
            },
            price: {
                color: '#f56b2a',
                fontSize: '1.2rem',
                fontFamily: "'OpenSansSemiBold',sans-serif",
                fontWeight: 600,
            },
            date: {
                fontWeight: 100,
                fontSize: '0.8rem',
            },

        }
        const renderDate = (date) => {
            return (
                date.toLocaleDateString('fr-FR', options)
            )
        }
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" }


        if (lbc) {
            return (
                lbc.map((result) => {
                    return (
                        <div className="row" style={style.row} key={result.id}>
                            <div className="col-3" style={style.imgContainer}>
                                <img src={result.images[0]} alt='' style={style.img} />
                            </div>
                            <div className="col-5" style={style.content}>
                                <p style={style.title}>{result.title}</p>
                                <p style={style.location}>{result.location}</p>
                                <p style={style.price}>{isNaN(result.price) ? '' : result.price + ' €'}</p>
                            </div>
                            <div className="col-3" style={style.content}>
                                <p className="text-right text-muted" style={style.save}><i className="far fa-heart mr-2"></i><i className="far fa-user"></i></p>
                                <p className="text-right" style={style.date}>{renderDate(result.date)}</p>
                                <Link to='/details'>détails </Link>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        return (

            <div className="container">
                {this.renderLBC()}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        lbc: state.lbc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getLBC }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);