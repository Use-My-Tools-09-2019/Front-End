import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    background-color: #76d275;
    padding: 25px;
    position: absolute; 
    bottom: 100; 
    width: 100%;
    margin-top: 320px;
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
