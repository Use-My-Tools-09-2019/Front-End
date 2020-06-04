import styled from "styled-components";

export{
    Container,
    Button
}

const Container = styled.div`
    display: flex;
    margin-left: 20px;
    
    
`

const Button = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    background: ${props => props.active ? 'yellow': 'none'};
    border 1px solid yellow;
    color: ${props => props.active ? 'black': 'yellow'};
    font-size: 1.3rem;
    width: 150px;
    height: 50px;
    &:hover {
        background: ${props => props.active ? '': '#252525'};
    }
`