import styled from 'styled-components';

export {
    //nav
    Button,
    TopBar,
    Title,
    ButtonDiv
}


const Button = styled.button`
    width: 12rem;
    background-color: #ecfffd;
    border-radius: 10px;
    height: 5rem;
    margin: 1%;
    font-size: 1.6rem;
    box-shadow: 4px 4px 4px 0px #000
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    width: 100%;
    height: 10rem;
    background-color:#269;
    background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;

`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem
`;

const ButtonDiv = styled.div`
    display: flex;
`;
