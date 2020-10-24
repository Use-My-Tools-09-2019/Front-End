import React, { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { getTools } from "../../store/actions";

//styles
import * as styled from "../styled-components/searchParams";

let initialActive = {
  all: false, 
  power: false, 
  garden: false, 
  hand: false
}

const SearchParams = () => {
  const dispatch = useDispatch()
  let [active, setActive] = useState({...initialActive, all: true})


  return (
    <styled.Container>
        <styled.Button active={active.all} onClick={() => {
            dispatch(getTools())
            setActive({...initialActive, all: true})
          }}
          >All</styled.Button>
        <styled.Button active={active.power} onClick={() => {
          dispatch(getTools('Power Tool'))
          setActive({...initialActive, power: true})
          }}
          >Power Tools</styled.Button>
        <styled.Button active={active.garden} onClick={() => {
          dispatch(getTools('Garden Tool'))
          setActive({...initialActive, garden: true})
          }}>Garden Tools</styled.Button>
        <styled.Button active={active.hand} onClick={() => {
          dispatch(getTools('Hand Tool'))
          setActive({...initialActive, hand: true})
        }}>Hand Tools</styled.Button>
    </styled.Container>
  );
};

export default SearchParams;
