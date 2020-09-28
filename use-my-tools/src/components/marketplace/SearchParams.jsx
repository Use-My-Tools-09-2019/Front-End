import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getTools } from "../../store/actions";

//styles
import * as styled from "../styled-components/searchParams";


const SearchParams = () => {
  const dispatch = useDispatch()
  const active = useSelector(state => state.tools.activeFilter)

  return (
    <styled.Container>
        <styled.Button active={active.all} onClick={() => {dispatch(getTools())}}>All</styled.Button>
        <styled.Button active={active.Power} onClick={() => {dispatch(getTools('Power'))}}>Power Tools</styled.Button>
        <styled.Button active={active.Garden} onClick={() => {dispatch(getTools('Garden'))}}>Garden Tools</styled.Button>
        <styled.Button active={active.Hand} onClick={() => {dispatch(getTools('Hand'))}}>Hand Tools</styled.Button>
    </styled.Container>
  );
};

export default SearchParams;
