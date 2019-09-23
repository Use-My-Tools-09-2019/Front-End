import React, { useState, useEffect } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const MyTools = ({ values, errors, touched, status }) => {
    const [tool, setTool] = useState([]);
    

    useEffect(() => {
        status && setTool(tool => [...tool, status]);
    }, [status]);

    return (
        <>
        <h1>Welcome, please enter your tools.</h1>
        <Modal trigger={<Button>Add New Tool</Button>}>
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

                    {/* Implement date selector? */}
                    <Field type="text" name="rentaldate" placeholder="Length of Rental" />

                    <button type="submit">Add Tool</button>
                </Form>
            </Modal.Description>
        </Modal>

                {/* Mapping over tools for the user */}

                {tool.map(tool => (
                    <div key={tool.id}>
                        <p>Tool Name: {tool.name}</p>
                        <p>Tool Description: {tool.description}</p>
                        <p>Tool Type: {tool.tooltype}</p>
                        <p>Rental Cost: ${tool.cost} per day</p>
                        <p>Length of Rental: {tool.rentaldate} days</p>
                    </div>
                ))}
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
            rentaldate: rentaldate || ""
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
        rentaldate: Yup
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