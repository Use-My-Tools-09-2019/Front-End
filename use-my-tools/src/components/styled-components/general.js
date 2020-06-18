import styled from 'styled-components';
import * as color from '../../styles/color'
import { tablet } from './media'

export const Button = styled.button`
width: 10rem;
height: 3rem;
margin: 20px 0px;
color: black;
background: ${color.primary};
border: none;
text-decoration: none;
font-size: 1.4rem;
cursor: pointer;
outline: none;
`