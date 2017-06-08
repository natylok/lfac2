import React, { Component } from 'react'
import { Form,Dropdown,Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { constants } from '../../../staticData/consts';
import  DynamicDropdown  from './formComponents/dynamicDropdown';
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
                        if(option.hasImages){
                            optionsFormArray.push(<DynamicDropdown key={counter} optionList={option}/>);
                        }
                        else{
                            optionsFormArray.push(<Form.Dropdown type={option.type} options={option.options} label={option.label} placeholder={option.placeholder} onChange={(event, { value }) => { this.handleInputChange(value, option.inputData) }} key={counter} />);
                        }
                        
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