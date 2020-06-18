import React, { useState } from "react";

//router
import { NavLink } from "react-router-dom";

// styles
import * as styled from "../styled-components/appRouter";
import * as color from '../../styles/color'


//mui
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #101010",
    background: color.nav
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    borderBottom: `0.5px solid ${color.primary}`
  },
}))(MenuItem);

export default function Hamburger() {
  //menu logic
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "yellow" }}
      >
        <ion-icon name="menu-outline"
          style={{fontSize: '3rem'}}
        ></ion-icon>
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!localStorage.getItem("token") ? (
          <>
            <StyledMenuItem onClick={handleClose}>
              <styled.Button>
                <NavLink to="/login">Login</NavLink>
              </styled.Button>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleClose}>
              <styled.Button>
                <NavLink to="/register">Register</NavLink>
              </styled.Button>
            </StyledMenuItem>
          </>
        ) : (
          <>
            <StyledMenuItem onClick={handleClose}>
              <styled.Button>
                <NavLink
                  to={`/marketplace/${localStorage.getItem("username")}`}
                >
                  Marketplace
                </NavLink>
              </styled.Button>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleClose}>
              <styled.Button>
                <NavLink to={`/my-tools/${localStorage.getItem("username")}`}>
                  My Tools
                </NavLink>
              </styled.Button>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleClose}>
              <styled.Button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("username");
                  window.location.reload();
                }}
              >
                <NavLink to="/login">Logout</NavLink>
              </styled.Button>
            </StyledMenuItem>
          </>
        )}
      </StyledMenu>
    </>
  );
}
