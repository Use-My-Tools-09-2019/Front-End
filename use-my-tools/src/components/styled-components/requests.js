import styled from 'styled-components';


const OptionButton = styled.button`
height: 20px;
width: 100px;
border: none;
textDecoration: none;
fontSize: 1rem;
background: ${props => props.accept ? 'green' : 'red'}; 
color: white;
cursor: pointer;
`

export {
    OptionButton,
}