import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section';
import Works from './components/Works';

// import Works from './components/Works';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Section/>
      <Works/>
    </div>
  );
}

export default App;