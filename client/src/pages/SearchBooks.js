import React from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

function SearchBooks() {
    return (
        <div>
            <Header/>
            <SearchForm className="container" />
        </div>
    )
}

export default SearchBooks;