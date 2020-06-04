import styled from 'styled-components';
import * as color from '../../styles/color'

export {
    Button,
    TopBar,
    Title,
    ButtonDiv,
    Logo,
}

const TopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center; 
padding: auto 50px;
width: 100%;
height: 100px;
background: #202020;
`;

const Title = styled.h1`
font-size: 2.5rem
margin-left: 10px
`;

const Logo = styled.img`
height: 80px;
object-fit: contain;
`

const ButtonDiv = styled.div`
display: flex;
color: ${color.primary};
align-items: center;

`;

const Button = styled.div`

a {
    width: 10rem;
    height: 3rem;
    margin: 1%;
    color: ${color.primary};
    background: #202020;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    font-size: 1.4rem;
    cursor: pointer;
}
`;