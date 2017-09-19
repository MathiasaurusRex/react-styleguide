import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import SGHeader from './components/00-styleguide/SGHeader';
import SGNavigation from './components/00-styleguide/SGNavigation';
import SGStage from './components/00-styleguide/SGStage';


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SGHeader/>
          <SGNavigation/>
          <SGStage/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;