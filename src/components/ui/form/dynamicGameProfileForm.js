import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { constants } from '../../../staticData/consts';
import _ from 'lodash';
import createNewProfile from '../../../actions/playerActions';
class DynamicGameProfileForm extends Component {
    constructor(props) {
        super(props);
    }
    handleInputChange(data,updatedOption){
        this.props.options.data[updatedOption] = data;
    }
    handleClick(){
        this.props.dispatch(createNewProfile(this.props.options.data,this.props.options.currentGame ,this.props.userId));
    }
    render() {
        let optionsFormArray = [];
        if (this.props.data) {
            _.map(this.props.data.options, (option) => {
                switch (option.type) {
                    case 'input':
                        optionsFormArray.push(<Form.Input type={option.type} label={option.label} placeholder={option.placeholder} onChange={(event) => { this.handleInputChange(event, option.inputData) }} key={option.placeholder} />);
                        break;
                    case 'select':
                        optionsFormArray.push(<Form.Select type={option.type} options={option.options} label={option.label} placeholder={option.placeholder} onChange={(event) => { this.handleInputChange(event, option.inputData) }} key={option.placeholder}/>);
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