import React from 'react';

function Card(props) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.img_src} className="card-img" alt={props.title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-text">by {props.authors.join(', ')}</h6>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;