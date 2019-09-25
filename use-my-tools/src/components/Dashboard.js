import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    width: 12rem;
    background-color: #ecfffd;
    border-radius: 10px;
    height: 5vh;
    margin: 1%;
    font-size: 1.6rem;
    box-shadow: 4px 4px 4px 0px #000
`;


// ToolsDiv is the dashboard view
const ToolsDiv = styled.div`
    display: flex;
    width: 49%;
    height: 90vh;
    justify-content: center;
    align-items: center;
`;

const MarketplaceDiv = styled.div`
    display: flex;
    width: 49%;
    height: 90vh;
    justify-content: center;
    align-items: center;
`;

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 1%;
`;



const Dashboard = () => {
    return (
        <>
        {/* Link to user tools and then to the marketplace. Each will be in their separate div containers */}
        {/* Each button link will need to have a route going to their respective pages. Will be the same routes as the navigation */}
            <ContainerDiv>
                <ToolsDiv>
                <Button>
                    <Link to="/My-Tools">My Tools</Link>
                </Button>
                </ToolsDiv>

                <MarketplaceDiv>
                    <Button>
                        <Link to="/Marketplace">Marketplace</Link>
                    </Button>
                </MarketplaceDiv>
            </ContainerDiv>
        </>
    )
};

export default Dashboard;