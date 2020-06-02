import React from 'react';
import { useInput } from '../utils/hooks/useInput'

//redux 
import{ useDispatch,useSelector } from 'react-redux'
import { getTools, searchTools} from '../store/actions'

//styles
import * as styled from "./styled-components/searchParams"

const initialState = {
    searchParam: 'all'
}
    
const SearchParams = () => {
    const tools = useSelector(state => state.tools.allTools)
    const dispatch = useDispatch()

    const [type, setType, handleChanges] = useInput(initialState)

    return (
        <styled.Container>
            <styled.Button active>
                All
            </styled.Button>
            <styled.Button>
                Power Tools
            </styled.Button>
            <styled.Button>
                Hand Tools
            </styled.Button>
            <styled.Button>
                Garden Tools
            </styled.Button>
        </styled.Container>
    )
}


export default SearchParams;