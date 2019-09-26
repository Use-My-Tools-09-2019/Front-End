import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Header } from 'semantic-ui-react';

const ToolCards = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;

    button {
        padding: 10px;
        border-radius: 20px;
        width: 150px;
        margin: auto;
    }

    button:hover{
        background-color: white;
        color: black;
    }

    img {
        width: 100px;
        height: 100px;
        margin: auto;
        padding-bottom: 20px;
    }

    .button {
        margin: auto;
    }

    form .formButton{
        color: red;
    }
`
const FormStyle = styled.form`
    button {
        margin-left: 15px;
        border-radius: 30px;
    }
`




function ToolCard ({props}) {
    return (
        <ToolCards className='tool'>
          <h3>{props.toolname}</h3>
          <img src={props.picture} />

          <h4>Tool Description</h4>
          <p>{props.tooldescription}</p>

          <h4>Rental Cost</h4>
          <p>${props.rentalcost}</p>
          <Modal style={{width: '400px',textAlign: 'center', padding: '30px'}} trigger={<Button className='button'>Request Tool</Button>} closeIcon>
              <Modal.Header>Request Tool</Modal.Header>
      
                <Modal.Description>
                    <Header>Please enter rental period</Header>
                    <FormStyle className='request-form'>
                        <input type='text' name='rentaldate' placeholder='Length of Rental'/>
                        <button type='submit'>Request</button>
                    </FormStyle>
                </Modal.Description>
            </Modal>
        </ToolCards>
    )
}
export default ToolCard;