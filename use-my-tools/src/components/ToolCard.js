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
    const imageTool = () => {if(props.tool.tooltype === 'Hand Tool'){
        return (handtools);
       }else if(props.tool.tooltype === 'Power Tool'){
           return (powertools);
       }else{
           return(gardeningtools);
       }}  
        
    // request tool
    const handleSubmit = (e) => {
        e.preventDefault()
        const toolRequest = {
            "rentaldate": new Date,
            "toolid": props.tool.toolid,
        }
        props.requestTool(toolRequest)
    }

    return (
        <ToolCards className='tool'>
          <h3>{props.tool.user.username}'s {props.tool.toolname}</h3>
          <img src={imageTool()}/>
          <h4>{props.tool.tooltype}</h4>
          <h4>Tool Description</h4>
          <p>{props.tool.tooldescription}</p>
          <h4>Rental Cost</h4>
          <p>${props.tool.rentalcost}</p>
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

