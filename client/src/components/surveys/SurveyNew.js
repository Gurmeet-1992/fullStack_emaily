import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component{
    state = {
        showReview:false
    }
    show = ()=>{
        this.setState({showReview:true})
    }
    renderContent = () =>{
        if(this.state.showReview){
            return <SurveyFormReview onCancel={()=>this.setState({showReview:false})} />
        }
        return <SurveyForm onSurveySubmit={this.show} />
    }
    render(){
        return(
            <div>
            <h1>Survey New</h1>
            {this.renderContent()}
            </div>
        );
    }
};
export default reduxForm({
    form:'surveyForm'
})(SurveyNew);