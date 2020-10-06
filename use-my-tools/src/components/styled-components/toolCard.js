import styled from "styled-components";
import * as color from "../../styles/color"


export const Card = styled.div`
outline: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 300px;
width: 300px;
border: 1px solid ${color.primary};
border-radius: 10px;
margin: 25px;
background: ${color.cardBackground};
color: ${color.primary};
`

export const PriceTag = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding-left: 30px;
  margin-bottom: 30px;
  p {
    min-width: 75px;
    padding: 10px;
    background: ${color.primary};
    color: black;
    font-weight: 600;
  }
`
export const ToolContent = styled.div`
  height: 100%;
  width: 100%;
  img {
    width: 200px;
    height: 200px;
    margin: auto;
    padding-bottom: 20px;
  }
  h4 {
    font-size: 1.2rem
    margin-top: 5px;
    word-wrap: break-word;
  }
`;

export const ToolTitle = styled.h1`
  font-size: 2rem;
`


export const FormStyle = styled.form`
  height: 200px;
  button {
    margin-left: 15px;
    border-radius: 30px;
  }
`;