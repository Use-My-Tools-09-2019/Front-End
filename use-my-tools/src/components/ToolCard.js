import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Header } from 'semantic-ui-react';
import powertools from '../assets/powertools.jpg';
import handtools from '../assets/handtools.jpg';
import gardeningtools from '../assets/gardentools.jpg';

//redux
import { connect } from 'react-redux'
import { requestTool } from '../store/actions'

//hooks
import { useInput } from '../utils/hooks/useInput'

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
    const imageTool = () => {if(props.tooltype === 'Hand Tool'){
         return (handtools);
        }else if(props.tooltype === 'Power Tool'){
            return (powertools);
        }else{
            return(gardeningtools);
        }}  
        
    // request tool
    const [rentalDate, setRentalDate, handleChanges] = useInput("")
    const handleSubmit = () => {
        const toolRequest = {
            "rentaldate": Date.now(),
            "toolid": props.toolid,
        }
        props.requestTool(toolRequest)
        setRentalDate({})
    }


    return (
        <ToolCards className='tool'>
          <h3>{props.toolname}</h3>
          <img src={imageTool()}/>
          <h4>{props.tooltype}</h4>
          <h4>Tool Description</h4>
          <p>{props.tooldescription}</p>

          <h4>Rental Cost</h4>
          <p>${props.rentalcost}</p>
          <Modal style={{width: '400px',textAlign: 'center', padding: '30px'}} trigger={<Button className='button'>Request Tool</Button>} closeIcon>
              <Modal.Header>Request Tool</Modal.Header>
      
                <Modal.Description>
                    <Header>Please enter rental period</Header>
                    <FormStyle className='request-form'>
                        <input 
                        type='date' 
                        name='rentaldate' 
                        placeholder='Length of Rental'
                        value={rentalDate}
                        onChange={handleChanges}
                        />
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
export default connect(null, requestTool)(ToolCard);