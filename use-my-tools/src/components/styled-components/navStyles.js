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
    background-color: #76d275;
    border: 2px solid #88c399
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
