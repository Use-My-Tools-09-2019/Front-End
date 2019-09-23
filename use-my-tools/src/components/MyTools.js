import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Modal } from 'semantic-ui-react';
import { withFormik, Form, Field, setStatus } from 'formik';
import * as Yup from 'yup';

const MyTools = () => {
    return (
        <>
        <h1>Welcome, please enter your tools.</h1>
        <Modal trigger={<Button><Link to="/My-Tools/Add">Add New Tool</Link></Button>}>
            <Modal.Header>Add a New Tool</Modal.Header>
            <Modal.Description>
                <Header>Please fill out the following information:</Header>
                {/* Using Formik for the form functionality */}
                <p>Tool Name: </p>
                <p>Tool Description: </p>
                <p>Tool Type: </p>
                <p>Rental Cost: </p>
                <p>Length of Rental: </p>
            </Modal.Description>
        </Modal>
        </>
    )
}

export default MyTools;