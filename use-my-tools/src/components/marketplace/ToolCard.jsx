import React, { useState } from "react";

//redux
import { connect } from "react-redux";
import { requestTool } from "../../store/actions";

// styles
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as styled from "../styled-components/toolCard"
import { Button } from '../styled-components/general'


  function getModalStyle() {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
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
        <img src={props.tool.img_url} />
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
