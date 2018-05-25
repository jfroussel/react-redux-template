import React, { Component } from 'react';
import ContentList from './ContentList'
import Pub from './Pub'

class Content extends Component {
    render() {
        const style = {
            a: {
                hover: '#f56b2a'
            }
        }
        return (
            <div className="container pt-3">
            <div className="row">
                <h6 style={style.title} className="text-muted">Annonces Instruments de Musique Occasion : Ile-de-France</h6>
                <div className="col-9 pt-5">
                    <ul className="nav nav-tabs">
                        <li className="nav-item" >
                            <a className="nav-link active" href="#toutes" style={style.a}>Toutes 419</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#particuliers">Particuliers 401</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#professionnels">Professionnels 18</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="toutes" role="tabpanel" aria-labelledby="toutes-tab">
                            <ContentList />
                        </div>
                        <div className="tab-pane fade" id="particuliers" role="tabpanel" aria-labelledby="particuliers-tab">particuliers</div>
                        <div className="tab-pane fade" id="professionnels" role="tabpanel" aria-labelledby="professionnels-tab">professionnels</div>
                    </div>
                </div>
                <div className="col-3 pt-5">
                    <Pub />
                </div>
            </div>
            </div>
        );
    }
}

export default Content;
