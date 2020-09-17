import React from "react";

//mui
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #101010",
    background: color.nav,
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
    borderBottom: `0.5px solid ${color.primary}`,
  },
}))(MenuItem);

export default function EditImage() {
  //menu logic
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <button
      style={{
        position: "absolute",
        top: "160px",
        left: "55px",
        background: "Transparent",
        outline: "none",
        cursor: "pointer",
        textDecoration: "none",
        color: "rgb(0,0,0,0.6)",
        border: "none",
        fontSize: "2rem",
      }}
    >
      <ion-icon name="pencil-outline"></ion-icon>
    </button>
  );
}
