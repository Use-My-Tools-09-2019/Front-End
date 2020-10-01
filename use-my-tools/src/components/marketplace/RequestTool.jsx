import React, { useState } from "react";

//redux
import { requestTool } from "../../store/actions";
import { useDispatch } from "react-redux";

//hooks
import { useInput } from "../../utils/hooks/useInput";

//styles
import * as styled from "../styled-components/toolCard";
import * as color from "../../styles/color";
import { Form, Input, Label } from "../styled-components/form";
import { Button, Xbutton } from "../styled-components/general";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Title } from "../styled-components/addTool";

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
    width: 400,
    backgroundColor: "black",
    color: "white",
    border: `4px solid ${color.primary} `,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RequestTool({ toolID, usersTool }) {
  //redux
  const dispatch = useDispatch();
  //state
  const initialState = {
    tool_id: toolID,
    request_length: 1
  }
  const [request, setRequest, handleChanges] = useInput(initialState);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // request tool
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestTool(request));
    setRequest(initialState);
    handleClose()
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Form>
            <div>
              <Xbutton onClick={handleClose}>X</Xbutton>
              <Title>Request Tool</Title>
              <Label>Request Length</Label>
                <div style={{display: 'flex', alignItems: 'center'}}> 
                  <Input
                    type='number'
                    min={1}
                    style={{margin: 0, marginRight: '10px'}}
                    label="Request Length"
                    name="request_length"
                    value={request.request_length}
                    onChange={handleChanges}
                    />
                  <p style={{fontSize: '1.3rem', marginRight: '5px'}}>Days</p> 
                </div>
              <Button w={"10rem"} h={"3rem"} type="submit" onClick={handleSubmit}>
                Request
              </Button>

            </div>
          </Form>
        </div>
      </Modal>
      <Button 
        onClick={handleOpen}
        w={"10rem"}
        h={"3rem"}
        disabled={usersTool}
        active={usersTool}
      >
        Request
      </Button>
    </>
  );
}
