import styled from "styled-components";


export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 350px;
align-items: center;
width: 300px;
border: 1px solid yellow
border-radius: 10px;
margin: 25px;
background: #252525;
color: yellow;
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
    background: yellow;
    color: black;
    font-weight: 600;
  }
`
export const ToolContent = styled.div`

button {
    padding: 10px;
    border-radius: 20px;
    width: 150px;
    margin: auto;
  }

  button:hover {
    background-color: white;
    color: black;
  }

  img {
    width: 200px;
    height: 200px;
    margin: auto;
    padding-bottom: 20px;
  }

  .button {
    margin: auto;
  }

  form .formButton {
    color: red;
  }
`;

export const ToolTitle = styled.h1`
  font-size: 2rem;
`
export const FormStyle = styled.form`
  button {
    margin-left: 15px;
    border-radius: 30px;
  }
`;