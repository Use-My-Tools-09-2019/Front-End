import React from 'react';
import  DropdownTools  from './SearchForm';
import ToolCard from './ToolCard';
import styled from 'styled-components';


const ToolsPage = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 70px 0 0 35px;
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
      }
  ];

    return (
        <div>
          <br/>
            <DropdownTools />
            <ToolsPage className="tool">
              {toolsList.map(tool => <ToolCard props={tool} key={toolsList.name}/>)}
            </ToolsPage>
        </div>
    )
}

export default Marketplace;