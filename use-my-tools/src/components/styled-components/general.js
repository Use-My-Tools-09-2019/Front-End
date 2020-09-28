import styled from 'styled-components';
import * as color from '../../styles/color'
import { tablet } from './media'

export {
    Button,
    Xbutton
}

const Button = styled.button`
width: ${props => props.w};
height: ${props => props.h};
margin: 20px 0px;
color: black;
background: ${color.primary};
border: none;
text-decoration: none;
font-size: 1.4rem;
cursor: pointer;
outline: none;
`

const Xbutton = styled.button`
width: 2rem;
height: 2rem;
color: ${color.primary};
background: ${color.background}
border: none;
text-decoration: none;
font-size: 1.4rem;
cursor: pointer;
outline: none;
float: right;
`