import React,{Component} from 'react';
import SurveyField from './SurveyField';
import { reduxForm,Field } from 'redux-form';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import validEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

class SurveyForm extends Component{
    renderFields = ()=>{
        return _.map(FIELDS,({label,name}) =>{
            return <Field 
            key={name} 
            component={SurveyField} 
            type='text'
            label={label} 
            name={name} />
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                        {this.renderFields()}
                    <Link to='/surveys' className='red btn-flat white-text'>
                        Cancel
                    </Link>
                    <button 
                    className='teal btn-flat right white-text'
                    type='submit'>Next
                    <i className='material-icons right'>done</i>
                    </button>
                </form>
            </div>
        );
    }
};

const validate = (values) =>{
    const errors = {}
    errors.recipients = validEmails(values.recipients || '');
    _.each(FIELDS,({name})=>{
        if(!values[name]){
           errors[name]=`please provide ${name}` 
        }
    });
    return errors;
}

export default reduxForm({
    validate:validate,
    form:'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);
