import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/BookCard';
import ResultsContainer from '../components/ResultsContainer';
import API from '../utils/API';


function MyLibrary() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    },[]);

    function loadBooks() {
        API.getMyBooks()
        .then(results => {
           console.log(results);
           setBooks(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <Header/>
            <ResultsContainer>
                {console.log(books)}
                {books.map(book => <Card key={book._id} {...book} btnType="delete" loadBooks={loadBooks}/>)}
            </ResultsContainer>
        </div>
    )
}

export default MyLibrary;