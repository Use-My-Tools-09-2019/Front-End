import React, { useEffect } from 'react';


//components
import  SearchParams  from './SearchParams';
import ToolCard from './ToolCard';

//styles
import styled from 'styled-components';

//redux
import { getTools } from '../store/actions'
import {useDispatch, useSelector} from 'react-redux'

const ToolsPage = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-top: auto;
    padding: 70px 0px 0px;
    height: 100%;
`

function Marketplace () {
  const tools = useSelector(state => state.tools.allTools)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getTools())
  }, [])

  return (
        <div style={{width: '100%'}}>
          <br/>
            <SearchParams />
            <ToolsPage className="tool">
              {tools.map(tool => <ToolCard tool={tool} key={tool.toolid}/>)}
            </ToolsPage>
        </div>
    )
}

export default Marketplace;