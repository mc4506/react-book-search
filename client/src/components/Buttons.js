import React, {useState} from 'react';
import API from '../utils/API';

export function ViewBtn(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary mx-2">
                View
            </button>
        </a>
    )
};

export function SaveBtn(props) {

    const [btnDisabled, setBtnDisabled] = useState(false);
    
    function handleSaveBook (event) {
        event.preventDefault();
        API.saveBook({
            id: props.id,
            title: props.title,
            authors: props.authors,
            description: props.description,
            img_src: props.img_src,
            link: props.link
        }).then( () => {
            console.log('saved');
            setBtnDisabled(true);
        }).catch( err => {
            console.log(err)
        });
    };

    return (
        <button className="btn btn-success mx-2" onClick={handleSaveBook} disabled={btnDisabled}>
            {btnDisabled ? "Book Saved" : "Save"}
        </button>
    )
};

export function DeleteBtn(props) {
    function handleDeleteBook (event) {
        event.preventDefault();
        API.deleteBook(props.id)
        .then( () => {
            console.log("deleted");
            props.loadBooks();
        }).catch( err => {
            console.log(err);
        });
    };

    return (
        <button className = "btn btn-danger mx-2" onClick={handleDeleteBook}>
            Delete
        </button>
    )
}
