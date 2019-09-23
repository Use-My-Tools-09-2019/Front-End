import React from 'react';
import LoggedIn from './components/LoggedIn';
import Navigation from './components/Navigation';
import MyTools from './components/MyTools';
import { Route } from 'react-router-dom';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* Routes to Nav items below */}
      {/* <LoggedIn /> */}
      <Route path="/My-Tools" component={MyTools} />
    </div>
  );
}

export default App;
