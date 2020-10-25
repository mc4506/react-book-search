import axios from 'axios';
const queryUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
    searchBooks: (query, param, index) => {
        if(param === 'none') {
            return axios.get(`${queryUrl}${query}&startIndex=${index}&key=${process.env.REACT_APP_API_KEY}`);
        } else {
            return axios.get(`${queryUrl}+in${param}:${query}&startIndex=${index}&key=${process.env.REACT_APP_API_KEY}`);            
        }
    },
    saveBook: (bookData) => {
        return axios.post('/api/books', bookData);
    },
    getMyBooks: () => {
        return axios.get('/api/books');
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}