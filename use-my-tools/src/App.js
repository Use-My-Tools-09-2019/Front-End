import React from 'react';

//router
import { Route, Redirect } from 'react-router-dom'

//components
import AppRouter from './components/nav/AppRouter'

//styles
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
