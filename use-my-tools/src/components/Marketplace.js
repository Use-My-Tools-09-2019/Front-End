import React from 'react';
import SearchForm from './SearchForm';
import ToolCard from './ToolCard';
import styled from 'styled-components';


const ToolsPage = styled.section`
    width: 800px;
    margin: auto;
    display: inline-block;
    height: 1000px;

     div {
        width: 300px;
        margin: 40px 0;
        padding: 40px 0;
        background-color: #76d275;
        border-radius: 50px;
    }
`

function Marketplace () {

const toolsList = [
    {
      "name": "Angle-grinder",
      "picture": "http://placehold.it/32x32",
      "about": "Hand-held angle-grinder powered by electric motor",
      "price": "$7/day"
    },
    {
      "name": "Jackhammer",
      "picture": "http://placehold.it/32x32",
      "about": "Hand-held jackhammer powered by electric motor",
      "price": "$18/day"
    },
    {
      "name": "Power-wrench",
      "picture": "http://placehold.it/32x32",
      "about": "Hand-held power-wrench that uses compressed air",
      "price": "$8/day"
    },
    {
      "name": "Chainsaw",
      "picture": "http://placehold.it/32x32",
      "about": "Electric motor powered chainsaw",
      "price": "$15/day"
    },
    {
        "name": "Angle-grinder",
        "picture": "http://placehold.it/32x32",
        "about": "Hand-held angle-grinder powered by electric motor",
        "price": "$7/day"
      },
      {
        "name": "Jackhammer",
        "picture": "http://placehold.it/32x32",
        "about": "Hand-held jackhammer powered by electric motor",
        "price": "$18/day"
      }
  ];

    return (
        <div>
            <h1>Use My Tools</h1>
            <SearchForm />
            <ToolsPage className="toolsList">
                {toolsList.map(tool => <ToolCard props={tool} key={toolsList.name}/>)}
            </ToolsPage>
        </div>
    )
}

export default Marketplace;