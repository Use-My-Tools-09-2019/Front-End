import React, { useState } from "react";

//imgs
import powertools from "../assets/powertools.jpg";
import handtools from "../assets/handtools.jpg";
import gardeningtools from "../assets/gardentools.jpg";

//redux
import { connect } from "react-redux";
import { requestTool } from "../store/actions";

// styles
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as styled from "./styled-components/toolCard"
import { Button } from './styled-components/general'

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
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ToolCard(props) {
  const imageTool = () => {
    if (props.tool.tool_type === "Hand Tool") {
      return handtools;
    } else if (props.tool.tool_type === "Power Tool") {
      return powertools;
    } else {
      return gardeningtools;
    }
  };

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
    const toolRequest = {
      id: props.tool.id,
      rentaldate: new Date(),
    };
    props.requestTool(toolRequest);
  };

  return (
    <styled.Card>
        <styled.PriceTag>
          <p>${props.tool.rental_cost}</p>
        </styled.PriceTag>
      <styled.ToolContent>
        
        <styled.ToolTitle> 
          {props.tool.tool_name}
        </styled.ToolTitle>
        <img src={imageTool()} />
        <h4>Owner: {props.tool.user_name}</h4>

        <h4>Type: {props.tool.tool_type}</h4>
        <h4>Tool Description: {props.tool.tool_description}</h4>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
              <styled.FormStyle className="request-form">
                <h1>Are you sure you want to request this item.</h1>
                <button type="submit" onClick={handleSubmit}>
                    Request
                </button>
              </styled.FormStyle>
          </div>
        </Modal>
        <Button onClick={handleOpen}>Request</Button>
      </styled.ToolContent>
    </styled.Card>
  );
}

export default connect(null, { requestTool })(ToolCard);
