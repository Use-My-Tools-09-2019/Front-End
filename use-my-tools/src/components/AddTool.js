import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

 //styles
import { Button, Header, Modal, Card } from 'semantic-ui-react';
import { FaWindowClose, FaTools } from 'react-icons/fa';
import { withFormik, Form, Field } from 'formik';

//redux
import { connect } from 'react-redux'
import { addTool } from '../store/actions'

const CustomButton = styled(Button)`
    width: 12rem;
    border-radius: 10px;
    height: 5vh;
    font-size: 1.6rem;
`;

const AddTool = ({ values, errors, touched, status }) => {
    const [tool, setTool] = useState([]);
    const [modal, setModal] = useState(false)

    const handleModalOpen = () => {
        setModal(true);
    }
    
      const handleModalClose = () => {
        setModal(false);
    }
    return (
        <Modal

            trigger={<Button onClick={() => { setModal(true) }} style={{ background: "#b9f6ca", margin: "2%" }}
                open={modal}
                onClose={handleModalClose}
            >Add New Tool</Button>} closeIcon>
            <Modal.Header>Add a New Tool</Modal.Header>
            <Modal.Description>
                <Header>Please fill out the following information:</Header>

                {/* Using Formik for the form functionality */}
                <Form>
                    <Field type="text" name="toolname" placeholder="Tool Name" />
                    {touched.toolname && errors.toolname && (<p>{errors.toolname}</p>)}

                    <Field type="text" name="tooldescription" placeholder="Tool Description" />
                    {touched.tooldescription && errors.tooldescription && (<p>{errors.tooldescription}</p>)}

                    {/* Change tool type over to a selectable list */}
                    <label htmlFor="tooltype">
                        <p>Tool Type: 
                    <Field component="select" name="tooltype" placeholder="Tool Type" style={{ margin: "1%" }} >
                        <option value="Select">Please select Tool Type </option>
                        <option value="Hand Tool">Hand Tools</option>
                        <option value="Power Tool">Power Tools</option>
                        <option value="Gardening Tool">Gardening Tools</option>
                    </Field>
                        </p>
                    </label>

                    {/* Change cost via selectable list?  */}
                    <Field type="number" name="rentalcost" placeholder="Rental Cost" />
                    {touched.rentalcost && errors.rentalcost && (<p>{errors.rentalcost}</p>)}

                    <label className="checkbox">
                        <p>Please verify all fields are correct before adding a new tool.
                                <Field type="checkbox" name="correctinfo" checked={values.correctinfo} />
                        </p>
                        {touched.correctinfo && errors.correctinfo && (<p>{errors.correctinfo}</p>)}
                    </label>
                    <Modal.Actions>
                        <CustomButton type="submit"
                            class="ui approve button"
                            onClick={handleModalClose}
                        >Add Tool</CustomButton>
                    </Modal.Actions>
                </Form>
            </Modal.Description>
        </Modal>
    )
}


const FormikUserForm = withFormik({
    mapPropsToValues({ toolname, tooldescription, tooltype, rentalcost, correctinfo }) {
        return {
            toolname: toolname || "",
            tooldescription: tooldescription || "",
            tooltype: tooltype || "",
            rentalcost: rentalcost || "",
            correctinfo: correctinfo || false,
        };
    },

    validationSchema: Yup.object().shape({

        toolname: Yup
            .string()
            .required("The tool name is required."),
        tooldescription: Yup
            .string()
            .required("The item description is required."),
        tooltype: Yup
            .string()
            .required("The tool type is required."),
        rentalcost: Yup
            .number()
            .required("The cost of the tool rental is required."),
        correctinfo: Yup
            .boolean()
            .oneOf([true], "You must confirm all fields are correct before submission."),

    }),

    handleSubmit(values, props) {
        const newTool = {
            toolid: Date.now(),
            toolname: values.toolname,
            tooldescription: values.tooldescription,
            tooltype: values.tooltype,
            rentalcost: values.rentalcost,

        }
        console.log(newTool)
        props.props.addTool(newTool)
        props.resetForm('');
    }

})(AddTool);

const mapStateToProps = state => ({
    userTools: state.tools.userTools
})

const mapActionsToProps = {
addTool
}
export default connect(mapStateToProps, mapActionsToProps )(FormikUserForm);
