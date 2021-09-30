import React, { useState } from "react";
import * as Yup from "yup";

//styles
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as color from "../../styles/color";
import * as generalStyled from "../styled-components/general";
import * as addToolStyled from "../styled-components/addTool";

//formik
import { withFormik, Form, Field } from "formik";

//redux
import { connect } from "react-redux";
import { addTool } from "../../store/actions";

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

const inputStyle = {
  width: "20rem",
  height: "2.5rem",
  fontSize: "1.5rem",
  marginBottom: "1.2rem",
};

const labelStyle = {};
const pStyle = {
  color: `${color.primary}`,
  width: "20rem",
  fontSize: "1.4rem",
};

const errorStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "red",
};

const AddTool = ({
  values,
  errors,
  touched,
  handleModalClose,
  handleModalOpen,
  modal,
}) => {
  //modal
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  return (
    <>
      <Modal
        open={modal}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <generalStyled.Xbutton onClick={handleModalClose}>
            X
          </generalStyled.Xbutton>
          <addToolStyled.Title>Add a New Tool</addToolStyled.Title>
          {/* Using Formik for the form functionality */}
          <Form>
            <label htmlFor="tool_name" style={labelStyle}>
              <p style={pStyle}>
                Tool Name:
                {touched.tool_name && errors.tool_name && (
                  <p style={errorStyle}>{errors.tool_name}</p>
                )}
                <Field
                  type="text"
                  name="tool_name"
                  placeholder="Tool Name"
                  style={inputStyle}
                />
              </p>
            </label>

            <label htmlFor="tool_description">
              <p style={pStyle}>
                Tool Description:
                {touched.tool_description && errors.tool_description && (
                  <p style={errorStyle}>{errors.tool_description}</p>
                )}
                <Field
                  type="text"
                  name="tool_description"
                  placeholder="Tool Description"
                  style={inputStyle}
                />
              </p>
            </label>

            <label htmlFor="tool_type">
              <p style={pStyle}>
                Tool Type:
                {touched.tool_type && errors.tool_type && (
                  <p style={errorStyle}>{errors.tool_type}</p>
                )}
                <Field
                  component="select"
                  name="tool_type"
                  placeholder="Tool Type"
                  style={inputStyle}
                >
                  <option value="Select">Please select Tool Type</option>
                  <option value="Hand Tool">Hand Tools</option>
                  <option value="Power Tool">Power Tools</option>
                  <option value="Garden Tool">Gardening Tools</option>
                </Field>
              </p>
            </label>

            <label htmlFor="rental_cost">
              <p style={pStyle}>
                Rental Cost: $
                {touched.rental_cost && errors.rental_cost && (
                  <p style={errorStyle}>{errors.rental_cost}</p>
                )}
                <Field
                  type="number"
                  name="rental_cost"
                  placeholder="Rental Cost"
                  style={inputStyle}
                />
              </p>
            </label>

            <label className="checkbox">
              <p style={{ fontSize: "1.3rem" }}>
                Make available for rental immediately.
                {touched.available && errors.available && (
                  <p style={errorStyle}>{errors.available}</p>
                )}
                <Field
                  type="checkbox"
                  name="available"
                  checked={values.available}
                  style={{ margin: "1%", height: "1.3rem", width: "1.3rem" }}
                />
              </p>
            </label>
            <generalStyled.Button
              type="submit"
              style={{ margin: "1%" }}
              w={"10rem"}
              h={"3rem"}
            >
              Add Tool
            </generalStyled.Button>
          </Form>
        </div>
      </Modal>
      <generalStyled.Button onClick={handleModalOpen} w={"10rem"} h={"3rem"}>
        Add Tool
      </generalStyled.Button>
    </>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({
    tool_img,
    tool_name,
    tool_description,
    tool_type,
    rental_cost,
    available,
  }) {
    return {
      tool_img: tool_img || "",
      tool_name: tool_name || "",
      tool_description: tool_description || "",
      tool_type: tool_type || "",
      rental_cost: rental_cost || "",
      available: available || false,
    };
  },

  validationSchema: Yup.object().shape({
    tool_name: Yup.string().required("The tool name is required."),
    tool_description: Yup.string().required(
      "The item description is required."
    ),
    tool_type: Yup.string().required("The tool type is required."),
    rental_cost: Yup.number().required("The cost oF rental is required."),
    available: Yup.boolean(),
  }),

  handleSubmit(values, props) {
    console.log("props", props);
    const newTool = {
      tool_img: values.tool_img,
      tool_name: values.tool_name,
      tool_description: values.tool_description,
      tool_type: values.tool_type,
      rental_cost: values.rental_cost,
      available: values.available,
    };
    props.props.addTool(newTool);
    props.resetForm("");
    props.props.handleModalClose();
  },
})(AddTool);

const mapStateToProps = (state) => ({
  userTools: state.myTools.userTools,
});

const mapActionsToProps = {
  addTool,
};
export default connect(mapStateToProps, mapActionsToProps)(FormikUserForm);
