import React, { useEffect } from 'react';


//components
import  DropdownTools  from './SearchForm';
import ToolCard from './ToolCard';

//styles
import styled from 'styled-components';

//redux
import { getTools } from '../store/actions'
import {useDispatch, useSelector} from 'react-redux'

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

function Marketplace () {
  const tools = useSelector(state => state.tools.allTools)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTools())
  }, [])

  return (
        <div>
          <br/>
            <DropdownTools />
            <ToolsPage className="tool">
              {tools.map(tool => <ToolCard tool={tool} key={tool.toolid}/>)}
            </ToolsPage>
        </div>
    )
}

export default Marketplace;