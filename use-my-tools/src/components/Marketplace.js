import React, { useEffect } from 'react';


//components
import  DropdownTools  from './SearchForm';
import ToolCard from './ToolCard';

//styles
import styled from 'styled-components';

//redux
import { getTools } from '../store/actions'


import { connect } from 'react-redux'

const ToolsPage = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 70px 0 0 35px;
    height: 100%;
  .tool{
    width: 300px;
    padding: 40px 20px;
    background-color: #76d275;
    border-radius: 50px;
    margin-bottom: 30px;
    margin-right: 30px;
  }   
`

function Marketplace (props) {
  useEffect(() => {
    props.getTools()
  }, [])
  
  return (
        <div>
          <br/>
            <DropdownTools />
            <ToolsPage className="tool">
              {props.tools.map(tool => <ToolCard props={tool} key={tool.id}/>)}
            </ToolsPage>
        </div>
    )
}

const mapStateToProps = state => ({
  tools: state.tools.allTools
})

export default connect(mapStateToProps, { getTools })(Marketplace);