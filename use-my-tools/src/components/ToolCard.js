import React from 'react';
import styled from 'styled-components';

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
`

function ToolCard ({props}) {
    return (
        <ToolCards className='tool'>
          <h3>{props.name}</h3>
          <img src={props.picture} />
          <p>{props.about}</p>
          <p>{props.price}</p>
          <button>Request Tool</button>
        </ToolCards>
    )
}

export default ToolCard;