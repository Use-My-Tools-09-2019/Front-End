import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
    background-color: #76d275;
    padding: 25px;
    width: 100%;
    margin-top: 320px;
    display: flex;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    span {
        font-weight: bold;
    }
`

const Footer = () => {
    return (
        <FooterDiv className="footer">
            <span>Use My Tools 2019 &copy;</span>
        </FooterDiv>
    );
}


export default Footer;

