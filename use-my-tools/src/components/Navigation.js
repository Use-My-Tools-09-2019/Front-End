import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    width: 12rem;
    background-color: #ecfffd;
    border-radius: 10px;
    height: 5vh;
    margin: 1%
    font-size: 1.6rem;
    box-shadow: 4px 4px 4px 0px #000
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    width: 100%;
    height: 10vh;
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

const Navigation = () => {
    return (
        // Navigation Links
        // Navigation Links will be styled as buttons
        // Login/Register buttons change to User Tools / Marketplace once logged in
        // Drop down user name - logout/account settings
        <TopBar className="top-bar">
            <Title>Use My Tools</Title>
            <ButtonDiv>
                <Button><NavLink to="/login">Login</NavLink></Button>
                <Button><NavLink to="/register">Register</NavLink></Button>
                <Button><NavLink to="/Marketplace">Marketplace</NavLink></Button>
                <Button><NavLink to="/My-Tools">My Tools</NavLink></Button>
            </ButtonDiv>
        </TopBar>
    );
}

export default Navigation;