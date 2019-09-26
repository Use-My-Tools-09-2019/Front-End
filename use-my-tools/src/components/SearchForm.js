import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { useInput } from '../utils/hooks/useInput'

//redux 
import{ connect } from 'react-redux'
import { getTools, searchTools} from '../store/actions'

const initialState = {
    searchParam: 'all'
}
    
const DropdownTools = (props) => {
    const [type, setType, handleChanges] = useInput(initialState)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('From SearchFrom', type.searchParam)
        // if(type === 'All'){
        //     props.getTools()
        // }else {props.searchTools(type)}
        type.searchParam === 'All' ? props.getTools() : props.searchTools(type)
        
    }
    return (
    <Form onSubmit={handleSubmit}>
        <Form.Input 
        label='Search By Tool Type' 
        control='select' 
        onChange={handleChanges} name="tooltype" 
        value={type.searchParam}
        width={4}
        name="searchParam"
        >
            <option value='All'>All</option>
            <option value="Hand Tool">Hand Tool</option>
            <option value="Power Tool">Power Tool</option>
            <option value="Gardening Tool">Gardening Tool</option>
        </Form.Input>
        <Button type='submit' color='black' className='search-btn'>Search</Button>
    </Form>
    )
}


export default connect(null, { searchTools, getTools})(DropdownTools);