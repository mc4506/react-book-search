import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Card from '../components/BookCard';
import ResultsContainer from '../components/ResultsContainer';
import API from '../utils/API';


function SearchBooks() {
    const [books, setBooks] = useState([]);

    function search(searchTerm){
        API.searchBooks(searchTerm)
        .then(results => {
            // console.log(results);
            const searchedBooks = results.data.items.map(e => {
                return {
                    id: e.id,
                    title: e.volumeInfo.title,
                    authors: e.volumeInfo.authors,
                    description: e.volumeInfo.description,
                    img_src: e.volumeInfo.imageLinks.thumbnail,
                    link: e.volumeInfo.infoLink
                }
            });
            setBooks(...books, searchedBooks);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <Header/>
            <SearchForm className="container" search={search}/>
            <ResultsContainer>
                {/* {console.log(books)} */}
                {books.map(book => <Card key={book.id} {...book} />)}
            </ResultsContainer>
        </div>
    )
}

export default SearchBooks;