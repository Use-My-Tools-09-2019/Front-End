import React, { useState, useEffect } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { FaWindowClose } from 'react-icons/fa';
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
    margin: 1%
    font-size: 1.6rem;
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
            <Modal trigger={<CustomButton>Add New Tool</CustomButton>} closeIcon>
                <Modal.Header>Add a New Tool</Modal.Header>
                <Modal.Description>
                    <Header>Please fill out the following information:</Header>
                    
                    {/* Using Formik for the form functionality */}
                    <Form>
                        <Field type="text" name="name" placeholder="Tool Name" />

                        <Field type="text" name="description" placeholder="Tool Description" />

                        {/* Change tool type over to a selectable list */}
                        <Field type="text" name="tooltype" placeholder="Tool Type" />

                        {/* Change cost via selectable list?  */}
                        <Field type="number" name="cost" placeholder="Rental Cost" />
                            <button type="submit" class="ui approve button">Add Tool</button>
                    </Form>
                </Modal.Description>
            </Modal>

                    {/* Mapping over tools for the user, adding new card for each input */}

                    {tool.map(tool => (
                        <div key={tool.id}>
                            {/* FaWindowClose is the icon to remove tools, functionality needed */}
                            <button><FaWindowClose /></button>
                            <p>Tool Name: {tool.name}</p>
                            <p>Tool Description: {tool.description}</p>
                            <p>Tool Type: {tool.tooltype}</p>
                            <p>Rental Cost: ${tool.cost} per day</p>
                        </div>
                    ))}
            </ToolUpdates>
            <CurrentRentals>
                <h2>Current Tools you're Renting</h2>
            </CurrentRentals>
        </ContainerDiv>
        </>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ name, description, tooltype, cost, rentaldate }) {
        return{
            name: name || "",
            description: description || "",
            tooltype: tooltype || "",
            cost: cost || "",
        };
    },

    validationSchema: Yup.object().shape({
        // Need to update validation schema to incorporate required fields. Add a checkbox to agree all data is correct before submission?

        name: Yup
                .string(),
        description: Yup
                .string(),
        tooltype: Yup
                .string(),
        cost: Yup
                .string(),
        
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