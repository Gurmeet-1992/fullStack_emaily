import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './header';
import Landing from './landing';
import {connect} from 'react-redux';
import * as actions from '../actions';

const dashboard = () => <h2>dashboard</h2>
const survey = () => <h2>survey</h2>



 class App extends Component{
     componentDidMount(){
        this.props.fetchUser();
     }
     render(){
        return(
        <div className='container'>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/surveys' component={dashboard}/>
                    <Route path='/surveys/new' component={survey}/>
                </div>
            </BrowserRouter>
        </div>
        );
    }   
}
export default connect(null,actions)(App);