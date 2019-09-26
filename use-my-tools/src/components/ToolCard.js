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

    form {
        width: 400px;
    }

    .request-form {
        width: 400px;
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
          <Modal trigger={<Button className='button'>Request Tool</Button>} closeIcon>
              <Modal.Header>Request Tool</Modal.Header>
                <Modal.Description>
                    <Header>Enter rental period</Header>
                    <form className='request-form'>
                        <input type='text' name='rentaldate' placeholder='Length of Rental'/>
                        <button type='submit'>Request</button>
                    </form>
                </Modal.Description>
          </Modal>
        </ToolCards>
    )
}
export default ToolCard;