import React from 'react';
import styled from 'styled-components';

const ToolCards = styled.div`

    p {
        color: red;
    }

    button {
        padding: 10px;
        border-radius: 50px;
    }
`

function ToolCard ({props}) {
    return (
        <ToolCards className='tool'>
          <p>{props.name}</p>
          <img src={props.picture} />
          <p>{props.about}</p>
          <p>{props.price}</p>
          <button>Request Tool</button>
        </ToolCards>
    )
}

export default ToolCard;