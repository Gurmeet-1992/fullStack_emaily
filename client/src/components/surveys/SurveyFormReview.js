import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from'../../actions';
import {withRouter} from 'react-router-dom'

const SurveyReview = ({onCancel,formValues,submitSurvey,history}) => {

  const reviewFields = _.map(formFields,field =>{
    return(
      <div key={field.name}>
        <label>{field.label}</label>
        <div>
          {formValues[field.name]}
        </div>
      </div>
    );
  })


  return (
    <div>
      <h5>Form Review</h5>
      {reviewFields}
      <button
      className='yellow darken-3 btn-flat'
      onClick={onCancel}>
      Back</button>
      <button 
      onClick={()=>submitSurvey(formValues,history)}
      className='green btn-flat right'>
        Send Survey<i className='material-icons right'>email</i>
      </button>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    formValues:state.form.surveyForm.values
  };
}
export default connect(mapStateToProps,actions)(withRouter(SurveyReview));