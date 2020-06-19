import React, { useState } from "react";

//hooks
import { useInput } from "../utils/hooks/useInput";

// redux
import { useDispatch } from "react-redux";
import { updateTool } from "../store/actions";

//styles
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as color from "../styles/color";
import Radio from "@material-ui/core/Radio";
import { Button } from './styled-components/myTools'

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

const UpdateToolModal = (props) => {
  //modal
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const initialState = {
    rental_cost: props.tool.rental_cost,
    tool_description: props.tool.tool_description,
    tool_name: props.tool.tool_name,
    tool_type: props.tool.tool_type,
    id: props.tool.id,
    available: props.tool.available,
    owner_id: props.tool.owner_id,
  };
  const [tool, setTool, handleChanges] = useInput(initialState);

  const handleCheckboxTrue = (e) => {
    setTool({ ...tool, available: true });
  };

  const handleCheckboxFalse = (e) => {
    setTool({ ...tool, available: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTool(tool));
    handleModalClose();
  };

  //redux hooks
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={modal}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h1>Update Tool</h1>
          <form onSubmit={handleSubmit}>
            <input
              label="Tool Name"
              name="tool_name"
              value={tool.tool_name}
              onChange={handleChanges}
            />
            <input
              label="Tool Description"
              name="tool_description"
              value={tool.tool_description}
              onChange={handleChanges}
            />
            <select
              label="Tool Type"
              type="select"
              onChange={handleChanges}
              name="tool_type"
              value={tool.tool_type}
            >
              <option value={tool.tool_type}>{tool.tool_type}</option>
              <option value="Hand Tool">Hand Tool</option>
              <option value="Power Tool">Power Tool</option>
              <option value="Gardening Tool">Gardening Tool</option>
            </select>
            <input
              label="Rental Cost $"
              type="number"
              name="rental_cost"
              value={tool.rental_cost}
              onChange={handleChanges}
            />
            <label>Available for rent</label>
            <Radio
              label="Yes"
              checked={tool.available}
              onClick={handleCheckboxTrue}
            />
            <Radio
              label="No"
              checked={!tool.available}
              onClick={handleCheckboxFalse}
            />
            <button type="submit">Update Tool</button>
          </form>
        </div>
      </Modal>
      <Button onClick={handleModalOpen}>
        <ion-icon name="open-outline"></ion-icon>
      </Button>
    </>
  );
};

export default UpdateToolModal;
