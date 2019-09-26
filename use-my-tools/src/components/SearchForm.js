import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// function SearchForm () {
    
    const toolCategories = [
        { key: 'Power Tools', text:'Power Tools', value: 'Power Tools' },
        { key: 'Hand Tools', text:'Hand Tools', value: 'Hand Tools' },
        { key: 'Garden Tools', text:'Garden Tools', value: 'Garden Tools' }

    ]

    const DropdownTools = () => (
        <Dropdown 
            button
            className ='categories'
            options={toolCategories}
            search
            text='Choose tool category'
        />
    )


export default DropdownTools;