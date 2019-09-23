import React from 'react';
import LoggedIn from './components/LoggedIn';
import Navigation from './components/Navigation';
import MyTools from './components/MyTools';


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
      <Navigation />
      {/* Routes to Nav items below */}
      {/* <LoggedIn /> */}
      <Route path="/My-Tools" component={MyTools} />
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </div>
  );
}

export default App;
