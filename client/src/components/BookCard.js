import React from 'react';
import { ViewBtn, SaveBtn, DeleteBtn } from './Buttons';

function Card(props) {

    return (
        <div className="card mb-3">
            <div className="card-header d-flex justify-content-end">
                <ViewBtn link={props.link}/>
                {props.btnType === "save" ? <SaveBtn {...props}/> : <DeleteBtn id={props._id} loadBooks={props.loadBooks} /> }
            </div>
            <div className="row no-gutters">
                <div className="col-md-4">
                    {props.img_src === "" ? "" : <img src={props.img_src} className="card-img" alt={props.title}/> }
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-text">by {props.authors === undefined ? "N/A": props.authors.join(', ')}</h6>
                        <p className="card-text">{props.description === undefined ? "None available" : props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;