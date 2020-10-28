import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/BookCard';
import ResultsContainer from '../components/ResultsContainer';
import Pagination from '../components/Pagination';
import API from '../utils/API';
import io from 'socket.io-client';

const socket = io();

function MyLibrary() {
    const [books, setBooks] = useState([]);
    const [index, setIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [notification, setNotification] = useState({});

    useEffect(() => {
        loadBooks(index);
        //mount socket
        socket.on('render save', (bookData) => {
            setNotification({
                title: bookData.title,
                authors: bookData.authors
            });
        });
        //cleanup socket by removing event listener
        return () => socket.off('render save');
    },[notification]);

    function Notification() {
        return (
            <div>
                <div className="alert alert-warning" role="alert">
                    <strong>A book has been saved to the library!</strong>
                    <p>Book Title: {notification.title}</p>
                    <p>By: {notification.authors === undefined ? "N/A": notification.authors.join(', ')}</p>
                </div>
            </div>
        )
    };

    function loadBooks(startIndex) {
        setIndex(startIndex);
        API.getMyBooks(startIndex)
        .then(results => {
           console.log(results);
           setBooks(results.data[1]);
           setTotalItems(results.data[0]);
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <Header/>
            <ResultsContainer>
                {(JSON.stringify(notification) !== '{}') && <Notification/> }
                {/* {console.log(books)} */}
                {(books.length !== 0) && <Pagination loadBooks={loadBooks} currentPage={index/10+1} totalPages={Math.floor(totalItems/10)+1}/>}
                {books.map(book => <Card key={book._id} {...book} btnType="delete" loadBooks={loadBooks}/>)}
            </ResultsContainer>
        </div>
    )
}

export default MyLibrary;