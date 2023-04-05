import React, { useEffect } from 'react';

import Navigation from './navigation';

import './materialize.min.css';
import './App.css';

const App = () => {

  useEffect(() => {
    const cut = window.location.href.split('/');
    if (!localStorage.getItem('userData') && cut[cut.length - 1] !== 'login') {
      window.location.assign('/login');
    };
    window.addEventListener('unload', () => {
      sessionStorage.clear();
    })
  }, []);

  return (<Navigation />);
}

export default App;