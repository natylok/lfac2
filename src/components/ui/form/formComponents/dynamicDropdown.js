import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DynamicDropdown = (props) => {
    console.log(props);
    return (
        <Dropdown options={props.optionList.options} onChange={(event,  val ) => { console.log(event, val) }}>

        </Dropdown>
    );}

export default DynamicDropdown;
