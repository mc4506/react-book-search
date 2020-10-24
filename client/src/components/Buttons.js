import React from 'react';
import API from '../utils/API';

export function ViewBtn(props) {
    return (
        <a href={props.link} target="_blank">
            <button className="btn btn-primary mx-2">
                View
            </button>
        </a>
    )
}

export function SaveBtn(props) {
    
    function handleSaveBook (event) {
        event.preventDefault();
        API.saveBook({
            id: props.id,
            title: props.title,
            authors: props.authors,
            description: props.description,
            img_src: props.img_src,
            link: props.link
        });
        console.log('saved');
    }

    return (
        <button className="btn btn-success mx-2" onClick={handleSaveBook}>
            Save
        </button>
    )
}
