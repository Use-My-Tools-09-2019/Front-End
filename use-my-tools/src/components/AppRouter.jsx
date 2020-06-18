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
import Dashboard from "./Dashboard";
import Login from "./Auth/Login";
import Register from "./Auth/register/Register";
import Marketplace from "./Marketplace";
import PrivateRoute from "./PrivateRoute";
import MyTools from "./MyTools";
import Hamburger from './Hamburger'

import Footer from "./Footer";

//styles
import * as styled from "./styled-components/appRouter";
import logImg from "../assets/logo.png";
import { tablet } from "./styled-components/media";
import { useMediaQuery } from "react-responsive";

export default function AppRouter() {
  //media query
  const isTablet = useMediaQuery({ query: `(max-width: ${tablet})` });

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
              {!localStorage.getItem("token") ? (
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
                        localStorage.removeItem("token");
                        localStorage.removeItem("username");
                        window.location.reload();
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
