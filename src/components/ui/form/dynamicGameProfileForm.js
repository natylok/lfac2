import React, { Component } from 'react'
import { Form,Dropdown,Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { constants } from '../../../staticData/consts';

import _ from 'lodash';
class DynamicGameProfileForm extends Component {
    constructor(props) {
        super(props);
    }
    handleInputChange(data,updatedOption){
        this.props.gameData.data[updatedOption] = data;
    }
    handleClick(){
        this.props.onClick(this.props.gameData.data);
    }
    render() {
        let optionsFormArray = [];
        if (this.props.gameData) {
            let counter = 0;
            _.map(this.props.gameData.options, (option) => {
                counter++;
                switch (option.type) {
                    case 'input':
                        optionsFormArray.push(<Form.Input type={option.type} label={option.label} placeholder={option.placeholder} onChange={(event) => { this.handleInputChange(event.currentTarget.value, option.inputData) }} key={option.placeholder} />);
                        break;
                    case 'select':
                        optionsFormArray.push(<Form.Dropdown key={counter} onChange={(event, optionData) => {this.handleInputChange(optionData.value, option.inputData) }} options={option.options} label={option.label} placeholder={option.placeholder}></Form.Dropdown>);
                        break;
                    case 'submit':
                        optionsFormArray.push(<Form.Button onClick={() => { this.handleClick(); }} key={option.text}>{option.text}</Form.Button>);
                        break;
                    default:
                        break;
                }
            });
        }
        
        return (
            <Form>
                {optionsFormArray}
            </Form>
        );
    }
}

export default connect()(DynamicGameProfileForm);