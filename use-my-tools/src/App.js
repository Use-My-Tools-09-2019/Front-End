import React from 'react';


//router
import { Route } from 'react-router-dom'

//components
import Login from './components/Login'
import Register from './components/Register'
import PrivateRoute from './components/PrivateRoute'

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </div>
  );
}

export default App;
