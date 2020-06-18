import React, { useEffect } from "react";

//components
import SearchParams from "./SearchParams";
import ToolCard from "./ToolCard";
import Loader from "react-loader-spinner";

//styles
import styled from "styled-components";
import { tablet } from "../styled-components/media";
import * as color from "../../styles/color"

//redux
import { getTools } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const ToolsPage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: auto;
  padding: 70px 0px 0px;
  height: 100%;

  @media (max-width: ${tablet}) {
    justify-content: center;
  }
`;

function Marketplace() {
  //state
  const tools = useSelector((state) => state.tools.allTools);
  const status = useSelector((state) => state.tools.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTools());
  }, []);

  if (!status){
    return(
      <div>
        <br/>
        <SearchParams />
        <br/>
        <Loader
          type="Oval"
          color={color.spinner}
          height={100}
          width={100}
        />
      </div>
    )
  }

  return (
    <div style={{ width: "100%" }}>
      <br />
      <SearchParams />
      <ToolsPage className="tool">
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool.toolid} />
        ))}
      </ToolsPage>
    </div>
  );
}

export default Marketplace;
