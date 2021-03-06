import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import MyLibrary from './pages/MyLibrary';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
      <Route exact path='/' component={SearchBooks} />
      <Route exact path='/my-library' component={MyLibrary} />
    </HashRouter>
  );
}

export default App;
