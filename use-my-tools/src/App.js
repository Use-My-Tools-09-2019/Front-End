import React from 'react';

//router
import { Route, Redirect } from 'react-router-dom'

//components
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Marketplace from './components/Marketplace';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import MyTools from './components/MyTools';
import Footer from './components/Footer';

//styles
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Navigation} />
      {/* Routes to Nav items below */}
      <Route exact path = "/" render={() => localStorage.getItem('token') ? <Redirect to={`/dashboard/${localStorage.getItem('username')}`}/> : <Redirect to={`/login`} />} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <PrivateRoute exact path='/dashboard/:id' component={Dashboard}/>
      <PrivateRoute exact path='/marketplace/:id' component={Marketplace}/>
      <PrivateRoute path="/my-Tools/:id" component={MyTools} />
      <Footer />
    </div>
  );
}

export default App;
