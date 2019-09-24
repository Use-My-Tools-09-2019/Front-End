import React from 'react';

import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import MyTools from './components/MyTools';


//router
import { Route, Redirect } from 'react-router-dom'

//components
import Dashboard from './components/Dashboard';
import Login from './components/Login'
import Register from './components/Register'
import Marketplace from './components/Marketplace';
import PrivateRoute from './components/PrivateRoute'

//styles
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/marketplace' component={Marketplace}/>
      {/* Routes to Nav items below */}
      <Route exact path = "/" render={() => localStorage.getItem('token') ? <Redirect to={`/dashboard/${localStorage.getItem('username')}`}/> : <Redirect to={`/login`} />} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <PrivateRoute exact path='/dashboard/:id' component={Dashboard}/>
      <PrivateRoute exact path='/marketplace/:id' component={Marketplace}/>
      <PrivateRoute path="/my-Tools/:id" component={MyTools} />
    </div>
  );
}

export default App;
