import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
      <Route exact path='/search-books' component={SearchBooks} />
    </HashRouter>
  );
}

export default App;
