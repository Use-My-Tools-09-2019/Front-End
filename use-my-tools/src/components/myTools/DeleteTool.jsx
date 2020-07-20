import React, { useState } from "react";

// mui
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

//redux
import { deleteTool } from "../../store/actions";
import { useDispatch } from "react-redux";

//styles
import { Button } from "../styled-components/myTools";

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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
      <Button onClick={handleOpen}>
        <ion-icon name="trash-outline"></ion-icon>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <p>Are you sure you want to delete this tool?</p>
          <button
            onClick={() => {
              dispatch(deleteTool(tool.id));
              handleClose();
            }}
          >
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
}
