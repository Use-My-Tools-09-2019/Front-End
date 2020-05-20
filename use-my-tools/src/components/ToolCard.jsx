import React, { useState } from "react";
import styled from "styled-components";

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

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 350px;
align-items: center;
width: 300px;
border-radius: 25px;
background: black;
margin: 25px;
color: yellow;
`

const PriceTag = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding: 5px 0px 0px 30px;
  margin-bottom: 30px;
  color: white
`
const ToolContent = styled.div`

button {
  padding: 10px;
    border-radius: 20px;
    width: 150px;
    margin: auto;
  }

  button:hover {
    background-color: white;
    color: black;
  }

  img {
    width: 100px;
    height: 100px;
    margin: auto;
    padding-bottom: 20px;
  }

  .button {
    margin: auto;
  }

  form .formButton {
    color: red;
  }
`;
const FormStyle = styled.form`
  button {
    margin-left: 15px;
    border-radius: 30px;
  }
`;

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
    <Card>
        <PriceTag>
          <p>${props.tool.rental_cost}</p>
        </PriceTag>
      <ToolContent>
        
        <h1>
          {props.tool.user_name}'s {props.tool.tool_name}
        </h1>
        <img src={imageTool()} />
        <h4>{props.tool.tool_type}</h4>
        <h4>Tool Description</h4>
        <p>{props.tool.tool_description}</p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
              <h1>Are you sure you want to request this item.</h1>
              <FormStyle className="request-form">
              <button type="submit" onClick={handleSubmit}>
                  Request
              </button>
              </FormStyle>
          </div>
        </Modal>
        <button onClick={handleOpen}>Request</button>
      </ToolContent>
    </Card>
  );
}

export default connect(null, { requestTool })(ToolCard);
