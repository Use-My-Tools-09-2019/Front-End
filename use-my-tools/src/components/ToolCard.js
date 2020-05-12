import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Header } from 'semantic-ui-react';
import powertools from '../assets/powertools.jpg';
import handtools from '../assets/handtools.jpg';
import gardeningtools from '../assets/gardentools.jpg';

//redux
import { connect } from 'react-redux'
import { requestTool } from '../store/actions'


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

function ToolCard(props) {
    const imageTool = () => {if(props.tool.tool_type === 'Hand Tool'){
        return (handtools);
       }else if(props.tool.tool_type === 'Power Tool'){
           return (powertools);
       }else{
           return(gardeningtools);
       }}  
        
    // request tool
    const handleSubmit = (e) => {
        e.preventDefault()
        const toolRequest = {
            "id": props.tool.id,
            "rentaldate": new Date,
        }
        props.requestTool(toolRequest)
    }

    return (
        <ToolCards className='tool'>
          <h3>{props.tool.user_name}'s {props.tool.tool_name}</h3>
          <img src={imageTool()}/>
          <h4>{props.tool.tool_type}</h4>
          <h4>Tool Description</h4>
          <p>{props.tool.tool_description}</p>
          <h4>Rental Cost</h4>
          <p>${props.tool.rental_cost}</p>
          <Modal style={{width: '400px',textAlign: 'center', padding: '30px'}} trigger={<Button className='button'>Request Tool</Button>} closeIcon>
              <Modal.Header>Request Tool</Modal.Header>
      
                <Modal.Description>
                    <Header>Are you sure you want to request this item.</Header>
                    <FormStyle className='request-form'>
                        <button 
                        type='submit'
                        onClick={handleSubmit}
                        >Request</button>
                    </FormStyle>
                </Modal.Description>
            </Modal>
        </ToolCards>
    )
}


export default connect(null, { requestTool })(ToolCard);

