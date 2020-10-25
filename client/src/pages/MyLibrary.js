import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/BookCard';
import ResultsContainer from '../components/ResultsContainer';
import Pagination from '../components/Pagination';
import API from '../utils/API';


function MyLibrary() {
    const [books, setBooks] = useState([]);
    const [index, setIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        loadBooks();
    },[]);

    function loadBooks() {
        API.getMyBooks()
        .then(results => {
           console.log(results);
           setBooks(results.data);
           setTotalItems(results.data.length);
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <Header/>
            <ResultsContainer>
                {/* {console.log(books)} */}
                {(books.length !== 0) && <Pagination loadBooks={loadBooks} currentPage={index/10+1} totalPages={Math.floor(totalItems/10)+1}/>}
                {books.map(book => <Card key={book._id} {...book} btnType="delete" loadBooks={loadBooks}/>)}
            </ResultsContainer>
        </div>
    )
}

export default MyLibrary;