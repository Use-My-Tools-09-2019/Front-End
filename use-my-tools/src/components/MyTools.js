import React, { useState, useEffect } from "react";

import styled from "styled-components";
import images from "../images/welding.jpg";

//styles
import { Button, Header, Modal, Card, Icon } from "semantic-ui-react";
import { FaWindowClose, FaTools } from "react-icons/fa";

//redux
import { connect } from "react-redux";
import {updateTool, deleteTool } from "../store/actions";

// components
import AddTool from "./AddTool";

const ToolBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 49%;
    height: auto;
    justify-content: center;
    margin: 2%;
    background: #ecfffd;
    border: 2px solid #76d275;
    border-radius 15px;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 1%;
`;

const ItemContainer = styled.div`
  margin: 2%;
  border-radius: 15px;
`;

const ToolTitle = styled.div`
  text-align: center;
  margin-bottom: 2%;
  margin-top: 2%;
  width: 100%;
`;

const Background = styled.div`
  background-image: url(${images});
  height: 89.5vh;
`;

const Welcome = styled.h1`
  color: white;
  margin-top: 2%;
`;

const MyTools = props => {
  const [tool, setTool] = useState([]);
  console.log("from mytools", props);
  return (
    <Background>
      {/* Splitting the sections for My current tools/adding/edit tools and to view which tools have been rented.  */}
      <Welcome>Welcome to your tools.</Welcome>
      <AddTool />
      <ContainerDiv>
        <ToolBox>
          <ToolTitle>
            <h2>Current Tools you Own</h2>
            <h2>Add, Update, or Delete your Tools</h2>
          </ToolTitle>
          {/* Mapping over tools for the user, adding new card for each input */}
          {props.userTools.map(tool => (
            <ItemContainer class="ui cards">
              <div class="ui card" key={tool.toolid}>
                <div class="content">
                  <div class="header">
                    <p>Tool Name: {tool.toolname}</p>
                  </div>
                  <div class="meta">
                    <p>Tool Type: {tool.tooltype}</p>
                    <p>Rental Cost: ${tool.rentalcost} per day</p>
                  </div>
                  <div class="description">
                    <p>Tool Description: {tool.tooldescription}</p>
                  </div>

                  {/* FaWindowClose is the icon to remove tools, functionality needed.
                                    FaTools is the icon to edit/update tools, functionality needed. */}
                  {/* <button onClick={() => {props.deleteTool(tool.toolid)}}><FaWindowClose /></button> */}
                  <Modal
                    trigger={<Button>{<FaWindowClose />}</Button>}
                    basic
                    size="small"
                  >
                    <Header icon="delete" content="Delete Tool" />
                    <Modal.Content>
                      <p>Are you sure you want to delete this tool?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        onClick={() => {
                          props.deleteTool(tool.toolid);
                        }}
                        color="green"
                        inverted
                      >
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
                  <button>
                    <FaTools />
                  </button>
                </div>
              </div>
            </ItemContainer>
          ))}
        </ToolBox>
        <ToolBox>
          {/* List of all user rentals */}
          <ToolTitle>
            <h2>Current Tools you're Renting</h2>
          </ToolTitle>
          <ItemContainer>{/* <h3>Items will go here.</h3> */}</ItemContainer>
        </ToolBox>
      </ContainerDiv>
    </Background>
  );
};

const mapStateToProps = state => ({
  userTools: state.tools.userTools
});

const mapActionsToProps = {
  updateTool,
  deleteTool
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(MyTools);
