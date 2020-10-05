import React, { useState, useEffect, useCallback } from "react";

//components
import Requests from "./Requests"

//redux
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../store/actions";

//styles
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as color from "../../styles/color";
import * as styled from "../styled-components/general";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    background: "#151515",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: '400px',
    backgroundColor: "black",
    color: "white",
    border: `4px solid ${color.primary} `,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const amount = {
  display: "flex",
  position: "absolute",
  right: "-7px",
  top: "-9px",
  justifyContent: "center",
  alignItems: "center",
  height: "20px",
  width: "20px",
  fontSize: "1rem",
  borderRadius: "50%",
  background: "red",
  color: "white",
};

export default function RequestsModal() {
  //redux
  const requests = useSelector((state) => state.tools.requests);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getRequests());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  //modal state
  const [modal, setModal] = useState(false);
  //modal
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <div>
      <styled.Button
        onClick={handleModalOpen}
        style={{
          position: "relative",
          float: "left",
          marginLeft: "30px",
        }}
        h={"2rem"}
        w={"7rem"}
      >
        {requests.length ? (
          <span style={amount}>{requests.length}</span>
        ) : (
          <span></span>
        )}
        Requests
      </styled.Button>

      <Modal
        open={modal}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Requests requests={requests} handleModalClose={handleModalClose}/>
        </div>
      </Modal>
    </div>
  );
}
