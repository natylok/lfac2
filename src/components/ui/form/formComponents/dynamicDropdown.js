import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DynamicDropdown = (props) => {
    return (
        <Dropdown options={props.optionList.options} onChange={(event,  val ) => {  }}>

        </Dropdown>
    );}

export default DynamicDropdown;
