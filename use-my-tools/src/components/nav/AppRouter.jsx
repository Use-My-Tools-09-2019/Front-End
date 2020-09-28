import React from "react";

//router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";

//components
import Login from "../Auth/Login";
import Register from "../Auth/register/Register";
import Marketplace from "../marketplace/Marketplace";
import PrivateRoute from "../PrivateRoute";
import MyTools from "../myTools/MyTools";
import Hamburger from './Hamburger'

//redux
import { logoutAC } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

//styles
import * as styled from "../styled-components/appRouter";
import logImg from "../../assets/logo.png";
import { tablet } from "../styled-components/media";
import { useMediaQuery } from "react-responsive";

export default function AppRouter() {
  //media query
  const isTablet = useMediaQuery({ query: `(max-width: ${tablet})` });
  //state
  const status = useSelector((state) => state.login.loggedIn);
  

  const dispatch = useDispatch();

  return (
    <Router>
      <styled.TopBar className="top-bar">
        <styled.ButtonDiv>
          <styled.Logo src={logImg} />
          <styled.Title>Use My Tools</styled.Title>
        </styled.ButtonDiv>
        {isTablet ? (
          <Hamburger/>
        ) : (
          <>
            <styled.ButtonDiv>
              {!status ? (
                <>
                  <styled.Button>
                    <NavLink to="/login">Login</NavLink>
                  </styled.Button>
                  <styled.Button>
                    <NavLink to="/register">Register</NavLink>
                  </styled.Button>
                </>
              ) : (
                <>
                  <styled.Button>
                    <NavLink
                      to={`/marketplace/${localStorage.getItem("username")}`}
                    >
                      Marketplace
                    </NavLink>
                  </styled.Button>
                  <styled.Button>
                    <NavLink
                      to={`/my-tools/${localStorage.getItem("username")}`}
                    >
                      My Tools
                    </NavLink>
                  </styled.Button>
                  <span>
                    <styled.Button
                      onClick={() => {
                      dispatch(logoutAC())
                      }}
                    >
                      <NavLink to="/login">Logout</NavLink>
                    </styled.Button>
                  </span>
                </>
              )}
            </styled.ButtonDiv>
          </>
        )}
      </styled.TopBar>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
              <Redirect
                to={`/marketplace/${localStorage.getItem("username")}`}
              />
            ) : (
              <Redirect to={`/login`} />
            )
          }
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/marketplace/:id" component={Marketplace} />
        <PrivateRoute path="/my-Tools/:id" component={MyTools} />
      </Switch>
    </Router>
  );
}
