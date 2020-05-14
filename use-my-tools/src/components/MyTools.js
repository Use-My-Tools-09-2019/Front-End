import React, { useState, useEffect } from "react";

import styled from "styled-components";
import welding from "../images/welding.jpg";

//styles
import { FaWindowClose } from "react-icons/fa";
import Flip from 'react-reveal/Flip';


//redux
import {useDispatch, useSelector } from "react-redux";
import {deleteTool, getUserTools } from "../store/actions";

// components
import AddTool from "./AddTool";
import UpdateToolModal from "./UpdateToolModal"

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
    border-radius: 15px;
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



const Welcome = styled.h1`
  color: white;
  margin-top: 2%;
`;



const MyTools = () => {
  //redux hooks
  const dispatch = useDispatch()
  const userTools = useSelector(state => state.tools.userTools)

  
  useEffect(() => {
    dispatch(getUserTools())
  }, []);

  return (
    <>
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
          {userTools.map(tool => (
            <Flip top key={tool.id}>
            <ItemContainer className="ui cards" >
              <div className="ui card" >
                <div className="content">
                  <div className="header">
                    <p>Tool Name: {tool.tool_name}</p>
                  </div>
                  <div className="meta">
                    <p>Tool Type: {tool.tool_type}</p>
                    <p>Rental Cost: ${tool.rental_cost} per day</p>
                  </div>
                  <div className="description">
                    <p>Tool Description: {tool.tool_description}</p>
                  </div>
              
                  {/* FaWindowClose is the icon to remove tools, functionality needed.
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
                          dispatch(deleteTool(tool.id));
                        }}
                        color="green"
                        inverted
                      >
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
                  <UpdateToolModal tool={tool}/>
                </div>
              </div>
            </ItemContainer>
            </Flip>
          ))}
        </ToolBox>
        <ToolBox>
          {/* List of all user rentals */}
          <ToolTitle>
            <h2>Current Tools Requested for Rent</h2>
          </ToolTitle>
          
        </ToolBox>
      </ContainerDiv>
    </>
  );
};

export default MyTools;
