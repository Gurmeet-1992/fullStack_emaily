import React,{Component} from 'react';
import SurveyField from './SurveyField';
import { reduxForm,Field } from 'redux-form';

class SurveyForm extends Component{
    renderFields = ()=>{
        return(
            <div>
               <Field 
                    label='Survey Title'
                    type='text' 
                    name='title' 
                    component={SurveyField}
                />
                <Field 
                    label='Subject Line'
                    type='text' 
                    name='Subject' 
                    component={SurveyField}
                />
                <Field 
                    label='Email Body'
                    type='text' 
                    name='Body' 
                    component={SurveyField}
                />
                <Field 
                    label='Recipients'
                    type='text' 
                    name='Emails' 
                    component={SurveyField}
                />
            </div>
        );
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(values =>console.log(values))}>
                        {this.renderFields()}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
};
export default reduxForm({
    form:'surveyForm'
})(SurveyForm);