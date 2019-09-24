import React, { useState, useEffect } from 'react';
import { Button, Header, Modal, Card } from 'semantic-ui-react';
import { FaWindowClose, FaTools } from 'react-icons/fa';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const ToolUpdates = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    margin: 2%;
    border: 2px solid purple;
`;

const CurrentRentals = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    margin: 2%;
    border: 2px solid red;
`;

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 1%;
`;

const CustomButton = styled(Button)`
    width: 12rem;
    border-radius: 10px;
    height: 5vh;
    font-size: 1.6rem;
`;

const UICards = styled(Card)`
    display: flex;
    margin: 2%;
`;

const MyTools = ({ values, errors, touched, status }) => {
    const [tool, setTool] = useState([]);
  
    useEffect(() => {
        status && setTool(tool => [...tool, status]);
    }, [status]);

    return (
        <>
        {/* Splitting the sections for My current tools/adding/edit tools and to view which tools have been rented.  */}
        <h1>Welcome to your tools.</h1>
        <h3>Please add, update, or delete on the left or view your rentals on the right.</h3>
        <ContainerDiv>
            <ToolUpdates>
                <h2>Add, Update, or Delete your Tools</h2>
            <Modal trigger={<CustomButton style={{ background: "green" }}>Add New Tool</CustomButton>} closeIcon>
                <Modal.Header>Add a New Tool</Modal.Header>
                <Modal.Description>
                    <Header>Please fill out the following information:</Header>
                    
                    {/* Using Formik for the form functionality */}
                    <Form>
                        <Field type="text" name="name" placeholder="Tool Name" />
                        {touched.name && errors.name && (<p>{errors.name}</p>)}

                        <Field type="text" name="description" placeholder="Tool Description" />
                        {touched.description && errors.description && (<p>{errors.description}</p>)}

                        {/* Change tool type over to a selectable list */}
                        <Field type="text" name="tooltype" placeholder="Tool Type" />
                        {touched.tooltype && errors.tooltype && (<p>{errors.tooltype}</p>)}

                        {/* Change cost via selectable list?  */}
                        <Field type="number" name="cost" placeholder="Rental Cost" />
                        {touched.cost && errors.cost && (<p>{errors.cost}</p>)}

                        <label className="checkbox">
                            <p>Please verify all fields are correct before adding a new tool.
                        <Field type="checkbox" name="correctinfo" checked={values.correctinfo} />
                            </p>
                        {touched.correctinfo && errors.correctinfo && (<p>{errors.correctinfo}</p>)}
                        </label>
                        
                            <button type="submit" class="ui approve button">Add Tool</button>
                    </Form>
                </Modal.Description>
            </Modal>

                    {/* Mapping over tools for the user, adding new card for each input */}

                    {tool.map(tool => (
                        <UICards class="ui cards">
                            <div class="ui card" key={tool.id}>
                                <div class="content">
                                    <div class="header">
                                        <p>Tool Name: {tool.name}</p>
                                    </div>
                                    <div class="meta">
                                        <p>Tool Type: {tool.tooltype}</p>
                                        <p>Rental Cost: ${tool.cost} per day</p>
                                    </div>
                                    <div class="description">
                                        <p>Tool Description: {tool.description}</p>
                                    </div>
                                    

                                    {/* FaWindowClose is the icon to remove tools, functionality needed.
                                    FaTools is the icon to edit/update tools, functionality needed. */}
                                    <button><FaWindowClose /></button>
                                    <button><FaTools /></button>
                                </div>
                            </div>
                        </UICards>
                    ))}
            </ToolUpdates>
            <CurrentRentals>
                {/* List of all user rentals */}
                <h2>Current Tools you're Renting</h2>
            </CurrentRentals>
        </ContainerDiv>
        </>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ name, description, tooltype, cost, correctinfo }) {
        return{
            name: name || "",
            description: description || "",
            tooltype: tooltype || "",
            cost: cost || "",
            correctinfo: correctinfo || false,
        };
    },

    validationSchema: Yup.object().shape({
        
        name: Yup
                .string()
                .required("The tool name is required."),
        description: Yup
                .string()
                .required("The item description is required."),
        tooltype: Yup
                .string()
                .required("The tool type is required."),
        cost: Yup
                .number()
                .required("The cost of the tool rental is required."),
        correctinfo: Yup
                .boolean()
                .oneOf([true], "You must confirm all fields are correct before submission."),
        
    }),

    handleSubmit(values,  { setStatus, resetForm }) {
        console.log(values)
        resetForm('');
        axios
            // Using reqres until API has been deployed

            .post("https://reqres.in/api/users/", values)
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => console.log("There is an error", error.response));
    }

})(MyTools);

export default FormikUserForm;