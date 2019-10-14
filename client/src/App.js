import React from 'react';

import Header from './containers/Header'
import Main from './containers/Main'
import Footer from './containers/Footer'

import './style/App.css';

const App = () => {
  return (
    <div className='App'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
