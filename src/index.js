import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact'
import Experience from './components/Experience';

ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/experience' element={<Experience/>}/>
        </Routes>
    </Router>,
  document.getElementById('root')
);