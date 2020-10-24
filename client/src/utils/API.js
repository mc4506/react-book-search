import axios from 'axios';
const queryUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
    searchBooks: (query) => {
        return axios.get(`${queryUrl}${query}&key=${process.env.REACT_APP_API_KEY}`);
    }
}