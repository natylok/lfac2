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
            _.map(this.props.gameData.options, (option) => {
                switch (option.type) {
                    case 'input':
                        optionsFormArray.push(<Form.Input type={option.type} label={option.label} placeholder={option.placeholder} onChange={(event) => { this.handleInputChange(event.currentTarget.value, option.inputData) }} key={option.placeholder} />);
                        break;
                    case 'select':
                        if(option.hasImages){
                            optionsFormArray.push(<Form.Dropdown type={option.type}  label={option.label} placeholder={option.placeholder} onChange={(event, { value }) => { this.handleInputChange(value, option.inputData) }} key={option.placeholder}>
                                <Dropdown.Menu>{option.options.map((option) => {return <Dropdown.Item {...option}/> })}</Dropdown.Menu>
                            </Form.Dropdown>);
                        }
                        else{
                            optionsFormArray.push(<Form.Dropdown type={option.type} options={option.options} label={option.label} placeholder={option.placeholder} onChange={(event, { value }) => { this.handleInputChange(value, option.inputData) }} key={option.placeholder} />);
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