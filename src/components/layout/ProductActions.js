import React from 'react';

const style = {
    container: {
        paddingTop: '15px'
    },
    number: {
        backgroundColor: '#f56b2a',
        color: '#FFF'
    },
    userContainer: {
        align: 'center',

    },
    user: {
        color: '#f56b2a',
        fontSize: '60px'
    },
    icon: {
        fontSize: '1.5rem',

    },
    information: {
        color: '#f56b2a',
        fontSize: '12px',
    }
}


const ProductActions = ({ product }) => {

    if (!product) {
        return 'no actions'
    }
    return (

        <div className="container text-center" style={style.container}>
            <p style={style.UserContainer}><i className="fas fa-user-circle" style={style.user}></i></p>
            <span>{product.seller}</span>
            <hr />
            <button
                className="btn btn-block pb"
                style={style.number}

            >
                <i className="fas fa-phone fa-2x mr-2" style={style.icon}></i>Voir le numero</button>
            <br />
            <button className="btn btn-primary btn-block" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i className="far fa-comment-alt fa-2x mr-2" style={style.icon}></i>  Envoyer un message
                </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Votre message</label>
                            <textarea className="form-control rounded-0" rows="10"></textarea><br />
                            <button className="btn btn-sm btn-primary">Envoyer</button>
                            <div className="text-left pt-5" style={style.information}>Information</div>
                            <small className="form-text text-left font-italic text-muted " >Le responsable de traitement, les destinataires et la finalité de la collecte des données.
                                    En savoir plus sur vos droits, la durée de conservation de vos données et les moyens de nous contacter.</small>
                        </div>
                    </form>
                </div>
            </div><br />
            <button className="btn btn-info btn-block"><i className="far fa-comments fa-2x mr-2" style={style.icon}></i>  Dialoguer en direct</button>
        </div>

    )
}



export default ProductActions;
