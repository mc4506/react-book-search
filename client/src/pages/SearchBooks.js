import React, { useState} from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Card from '../components/BookCard';
import ResultsContainer from '../components/ResultsContainer';
import Pagination from '../components/Pagination';
import API from '../utils/API';

function SearchBooks() {
    const [books, setBooks] = useState([]);
    const [index, setIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [term, setTerm] = useState("");
    const [param, setParam] = useState("");

    function search(searchTerm, searchParam, startIndex){
        setIndex(startIndex);
        setTerm(searchTerm);
        setParam(searchParam);

        API.searchBooks(searchTerm, searchParam, startIndex)
        .then(results => {
            // console.log(results);
            const searchedBooks = results.data.items.map(e => {
                return {
                    id: e.id,
                    title: e.volumeInfo.title,
                    authors: e.volumeInfo.authors,
                    description: e.volumeInfo.description,
                    img_src: (e.volumeInfo.imageLinks !== undefined) ? e.volumeInfo.imageLinks.thumbnail : "",
                    link: e.volumeInfo.infoLink
                }
            });
            setBooks(searchedBooks);
            setTotalItems(results.data.totalItems);
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <Header/>
            <SearchForm className="container" search={search}/>
            <ResultsContainer>
                {(books.length !== 0) && <Pagination search={search} term={term} param={param} currentPage={index/10+1} totalPages={Math.floor(totalItems/10)+1}/>}
                {/* {console.log(books)} */}
                {books.map(book => <Card key={book.id} {...book} btnType="save"/>)}
            </ResultsContainer>
        </div>
    )
}

export default SearchBooks;