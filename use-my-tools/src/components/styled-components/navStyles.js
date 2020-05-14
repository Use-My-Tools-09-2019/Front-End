import styled from 'styled-components';


export {
    Button,
    TopBar,
    Title,
    ButtonDiv,
    Logo
}



const TopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center; 
padding: 0 20px
width: 100%;
height: 100px;
background: black

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
color: yellow;

`;

const Button = styled.button`
width: 10rem;
height: 3rem;
margin: 1%;
color: yellow;
background: black;
border: none;
padding: 1rem 2rem;
margin: 0;
text-decoration: none;
font-size: 1rem;
cursor: pointer;
`;