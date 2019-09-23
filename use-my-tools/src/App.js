import React from 'react';
import Navigation from './components/Navigation';
import LoggedIn from './components/LoggedIn';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* Routes to Nav items below */}
      <LoggedIn />
    </div>
  );
}

export default App;
