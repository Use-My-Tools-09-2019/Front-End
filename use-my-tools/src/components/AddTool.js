
import React, { useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";

//styles
import { Button, Header, Modal } from "semantic-ui-react";
import { FaWindowClose, FaTools } from "react-icons/fa";


import { withFormik, Form, Field } from "formik";

//redux
import { connect } from "react-redux";
import { addTool } from "../store/actions";

const CustomButton = styled(Button)`
  width: 12rem;
  border-radius: 10px;
  height: 3.23rem;
  font-size: 1.6rem;
`;

const AddTool = ({ values, errors, touched }) => {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };
  return (
    <Modal
      style={{ background: "#ecfffd", width: "34rem", textAlign: "center" }}
      trigger={
        <button
          onClick={() => {
            handleModalOpen();
          }}
          style={{ background: "#b9f6ca", margin: "2%" }}
          open={modal}
          onClose={handleModalClose}
        >
          Add New Tool
        </button>
      }
      closeIcon
    >
      <Modal.Header>Add a New Tool</Modal.Header>
      <Modal.Description>
        <Header style={{ margin: "1%" }}>
          Please fill out the following information:
        </Header>

        {/* Using Formik for the form functionality */}
        <Form>
          <label htmlFor="tool_name">
            <p style={{ fontSize: "1.2rem" }}>
              Tool Name:
              <Field
                type="text"
                name="tool_name"
                placeholder="Tool Name"
                style={{ margin: "1%" }}
              />
            </p>
          </label>
          {touched.tool_name && errors.tool_name && (
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {errors.tool_name}
            </p>
          )}

          <label htmlFor="tool_description">
            <p style={{ fontSize: "1.2rem" }}>
              Tool Description:
              <Field
                type="text"
                name="tool_description"
                placeholder="Tool Description"
                style={{ margin: "1%" }}
              />
            </p>
          </label>
          {touched.tool_description && errors.tool_description && (
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {errors.tool_description}
            </p>
          )}

          <label htmlFor="tool_type">
            <p style={{ fontSize: "1.2rem" }}>
              Tool Type:
              <Field
                component="select"
                name="tool_type"
                placeholder="Tool Type"
                style={{ margin: "1%" }}
              >
                <option value="Select">Please select Tool Type</option>
                <option value="Hand Tool">Hand Tools</option>
                <option value="Power Tool">Power Tools</option>
                <option value="Gardening Tool">Gardening Tools</option>
              </Field>
            </p>
          </label>
          {touched.tool_type && errors.tool_type && (
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {errors.tool_type}
            </p>
          )}

          <label htmlFor="rental_cost">
            <p style={{ fontSize: "1.2rem" }}>
              Rental Cost:
              <Field
                type="number"
                name="rental_cost"
                placeholder="Rental Cost"
                style={{ margin: "1%" }}
              />
            </p>
          </label>
          {touched.rental_cost && errors.rental_cost && (
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {errors.rental_cost}
            </p>
          )}

          <label className="checkbox">
            <p style={{ fontSize: "1.3rem" }}>
              Do you want this tool available for rental immediately.
              <Field
                type="checkbox"
                name="available"
                checked={values.available}
                style={{ margin: "1%", height: "1.3rem", width: "1.3rem" }}
              />
            </p>
            {touched.available && errors.available && (
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {errors.available}
              </p>
            )}
          </label>
          <Modal.Actions>
            <CustomButton
              type="submit"

              class="ui approve button"
              onClick={() => {handleModalClose()}}


              style={{ margin: "1%" }}
            >
              Add Tool
            </CustomButton>
          </Modal.Actions>
        </Form>
      </Modal.Description>
    </Modal>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({
    tool_name,
    tool_description,
    tool_type,
    rental_cost,
    available
  }) {
    return {
      tool_name: tool_name || "",
      tool_description: tool_description || "",
      tool_type: tool_type || "",
      rental_cost: rental_cost || "",
      available: available || false
    };
  },

  validationSchema: Yup.object().shape({
    tool_name: Yup.string().required("The tool name is required."),
    tool_description: Yup.string().required("The item description is required."),
    tool_type: Yup.string().required("The tool type is required."),
    rental_cost: Yup.number().required(
      "The cost of the tool rental is required."
    ),
    available: Yup.boolean()
  }),

  handleSubmit(values, props) {
    const newTool = {
      tool_name: values.tool_name,
      tool_description: values.tool_description,
      tool_type: values.tool_type,
      rental_cost: values.rental_cost,
      available: values.available

    };
    console.log(newTool);
    props.props.addTool(newTool);
    props.resetForm("");
  }
})(AddTool);

const mapStateToProps = state => ({
  userTools: state.tools.userTools
});

const mapActionsToProps = {
  addTool,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(FormikUserForm);
