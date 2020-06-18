import React, { useState, useEffect } from "react";

import welding from "../images/welding.jpg";

//styles
import { FaWindowClose } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as styled from "./styled-components/myTools"
import * as color from '../styles/color'

//redux
import { useDispatch, useSelector } from "react-redux";
import { deleteTool, getUserTools } from "../store/actions";

// components
import AddTool from "./AddTool";
import Loader from "react-loader-spinner";
// import UpdateToolModal from "./UpdateToolModal"


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
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

const MyTools = () => {
  //redux hooks
  const dispatch = useDispatch();
  const userTools = useSelector((state) => state.tools.userTools);
  const status = useSelector((state) => state.tools.status);


  //side effects
  useEffect(() => {
    dispatch(getUserTools());
  }, []);

  //mui modal
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (status){
    return(
      <div>
        <br/>
        <Loader
          type="Oval"
          color={color.spinner}
          height={100}
          width={100}
        />
      </div>
    )
  }

  return (
    <>
      <br/>
      <AddTool />
      <styled.ContainerDiv>
          {/* Mapping over tools for the user, adding new card for each input */}
          {userTools.map((tool) => (
                  <div>

                    <header icon="delete" content="Delete Tool" 
                      onClick={handleOpen}
                    />
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
                          }}
                        >
                          Yes
                        </button>
                      </div>
                    </Modal>
                  </div>
          ))}
      </styled.ContainerDiv>
    </>
  );
};

export default MyTools;
