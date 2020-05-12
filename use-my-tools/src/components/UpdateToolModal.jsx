import React, { useState } from "react";
import { Button, Modal, Form, Radio } from "semantic-ui-react";
import { FaTools } from "react-icons/fa";

//hooks
import { useInput } from "../utils/hooks/useInput";

// redux
import { useDispatch } from "react-redux";
import { updateTool } from "../store/actions";

const UpdateToolModal = (props) => {
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
    setTool({...tool, available: true})
  };

  const handleCheckboxFalse = (e) => {
    setTool({...tool, available: false})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTool(tool));
    handleModalClose()
  };

  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  //redux hooks 
  const dispatch = useDispatch()
  
  return (
    <Modal 
        trigger={<Button onClick={handleModalOpen}>{<FaTools />}</Button>}
        open={modal}
        onClose={handleModalClose}
    >
      <Modal.Header>Update Tool</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Tool Name"
              name="tool_name"
              control="input"
              value={tool.tool_name}
              onChange={handleChanges}
            />
            <Form.Input
              label="Tool Description"
              name="tool_description"
              control="input"
              value={tool.tool_description}
              onChange={handleChanges}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Tool Type"
              control="select"
              onChange={handleChanges}
              name="tool_type"
              value={tool.tool_type}
            >
              <option value={tool.tool_type}>{tool.tool_type}</option>
              <option value="Hand Tool">Hand Tool</option>
              <option value="Power Tool">Power Tool</option>
              <option value="Gardening Tool">Gardening Tool</option>
            </Form.Input>
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Rental Cost $"
              control="input"
              type="number"
              name="rental_cost"
              value={tool.rental_cost}
              onChange={handleChanges}
            />
          </Form.Group>
          <Form.Group>
          <label>Available for rent</label>
            <Form.Field
              control={Radio}
              label="Yes"
              checked={tool.available}
              onClick={handleCheckboxTrue}
            />
            <Form.Field
              control={Radio}
              label="No"
              checked={!tool.available}
              onClick={handleCheckboxFalse}
            />
          </Form.Group>
          <Button
            type='submit'
          >Update Tool</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default UpdateToolModal;
