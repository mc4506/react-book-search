import React, { useState , useEffect } from 'react';

const styles = {
    span: {
        color: "red"
    }
}

function SearchForm(){
    const [bookSearch, setBookSearch] = useState({
        searchField: "title",
        searchTerm: "",
    });
    const [invalidSearchTerm, setInvalidSearchTerm] = useState(false);
    const [invalidSearchField, setInvalidSearchField] = useState(false);

    handleInputChange = event => {
        console.log(event.target);
        const value = event.target.value;
        const name = event.target.name;
        setBookSearch({
            [name]: value
        });
    };

    return (
        <form className="container p-4 bg-light">
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="searchField">Select Search Field
                        <span style={styles.span}>
                            {invalidSearchField === true && ' Select a Search Field'}
                        </span></label>
                    <select className="form-control" id="searchField" 
                        name="searchField"
                        onChange={handleInputChange}>
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
                <button type="submit" className="btn btn-primary mx-4" onClick={handleSearch}>Search</button>
            </div>
        </form>
    )

};

export default SearchForm;