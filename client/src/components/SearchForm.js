import React, { useState , useEffect } from 'react';
import API from '../utils/API';

const styles = {
    span: {
        color: "red"
    }
}

function SearchForm(){
    const [bookSearch, setBookSearch] = useState({
        searchField: "none",
        searchTerm: "",
    });
    const [books, setBooks] = useState({

    });
    
    const [invalidSearchTerm, setInvalidSearchTerm] = useState(false);

    const handleInputChange = event => {
        // console.log(event.target);
        const value = event.target.value;
        const name = event.target.name;
        setBookSearch({
            ...bookSearch,
            [name]: value
        });
    };

    const handleSearch = event => {
        event.preventDefault();
        if(bookSearch.searchTerm === "") {
            setInvalidSearchTerm(true);
            return;
        }

        API.searchBooks(bookSearch.searchTerm)
        .then(results => {
            console.log(results);
        })
    }

    return (
        <form className="container p-4 bg-light" onSubmit={handleSearch}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="searchField">Search Parameter</label>
                    <select className="form-control" id="searchField" 
                        name="searchField"
                        onChange={handleInputChange}>
                            <option value="none">None</option>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                    </select>
                </div>
                <div className="form-group col-md-8">
                    <label htmlFor="searchTerm">Book Search
                        <span style={styles.span}>
                            {invalidSearchTerm === true && ' Please enter search term'}
                        </span>
                    </label>
                    <input type="text" className="form-control" id="searchTerm"
                        name="searchTerm" 
                        value={bookSearch.searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="col">
                <button type="submit" className="btn btn-primary mx-4">Search</button>
            </div>
        </form>
    )

};

export default SearchForm;