import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './header';
import Landing from './landing';
import Dashboard from './dashboard';
import SurveyNew from './surveys/SurveyNew';
import {connect} from 'react-redux';
import * as actions from '../actions';


 class App extends Component{
     componentDidMount(){
        this.props.fetchUser();
     }
     render(){
        return(
        <div className='container'>
            <BrowserRouter>
                <div className='container'>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/surveys' component={Dashboard}/>
                    <Route path='/surveys/new' component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
        );
    }   
}
export default connect(null,actions)(App);