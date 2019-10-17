import React from 'react';

import Header from './containers/Header'
import Main from './containers/Main'
import Footer from './containers/Footer'

import useWidgetMenu from './hooks/useWidgetMenu'

import './style/App.css';

const App = () => {

  const [displayWidgetMenu, openWidgetMenu, closeWidgetMenu] = useWidgetMenu()
  
  return (
    <div className='App'>
        <Header displayWidgetMenu={displayWidgetMenu} openWidgetMenu={openWidgetMenu} closeWidgetMenu={closeWidgetMenu} />
        <Main displayWidgetMenu={displayWidgetMenu} closeWidgetMenu={closeWidgetMenu} />
        <Footer />
    </div>
  );
}

export default App;
