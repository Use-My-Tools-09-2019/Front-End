import styled from "styled-components";
import * as color from "../../styles/color"

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
    background: ${props => props.active ?  color.primary : 'none'};
    border 1px solid ${color.primary};
    color: ${props => props.active ? 'black' : color.primary};
    font-size: 1.3rem;
    width: 150px;
    height: 50px;
    &:hover {
        background: ${props => props.active ? '': '#252525'};
    }
`