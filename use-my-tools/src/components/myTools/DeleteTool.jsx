import React, { useState } from "react";

// mui
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

//redux
import { deleteTool } from "../../store/actions";
import { useDispatch } from "react-redux";

//styles
import { Button } from "../styled-components/myTools";
import * as styled from "../styled-components/general";
import * as color from "../../styles/color";


function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    fontSize: '2rem',
    height: 200,
    width: 320,
    color: color.primary,
    backgroundColor: color.cardBackground,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const pStyle = {
  marginTop: '50px'
}

export default function DeleteTool({ tool }) {
  //mui modal
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  //redux
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{borderTopLeftRadius: '4px' ,}} onClick={handleOpen}>
        <ion-icon name="trash-outline"></ion-icon>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <styled.Xbutton onClick={handleClose}>X</styled.Xbutton>
          <p style={pStyle}>Are you sure you want to delete this tool?</p>
          <styled.Button
            w={'7rem'}
            h={'3rem'}
            onClick={() => {
              dispatch(deleteTool(tool.id));
              handleClose();
            }}
          >
            Yes
          </styled.Button>
        </div>
      </Modal>
    </div>
  );
}
