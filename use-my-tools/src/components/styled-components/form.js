import styled from 'styled-components'
import * as color from '../../styles/color'

export const LoginContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;

.form{
  width: 400px;
  height: 300px;
  
  h1{
    font-size: 2.5rem;
    color: ${color.primary};
  }

  h2{
    font-size: 2rem;
    color: ${color.primary};
  }

  p{
    font-size: 1.3rem;
    margin: 5px;
    color: red;
  }
  
  input{
    padding: 10px 22px;
    margin-bottom: 10px;
    box-sizing: border-box; 
  }

  button{
    width: 10rem;
    height: 3rem;
    color: black;
    background: ${color.primary};
    border: none;
    text-decoration: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
}
`