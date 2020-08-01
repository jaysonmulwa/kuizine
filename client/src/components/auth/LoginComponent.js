import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { getItems } from '../../actions/itemActions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert,  Image, Container } from 'react-bootstrap';

import Background from '../../res/images/login-doodle.png';

import PropTypes from 'prop-types';

import RegisterComponent from "./RegisterComponent";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class LoginComponent extends Component {


state = {

		modal: false,
		email: '',
		password: '',
		msg: null,
		redirect: false

	};





static propTypes = {

	isAuthenticated: PropTypes.bool,
	error: PropTypes.object.isRequired,
	login: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired
};

componentWillMount() {
   /* if (this.props.isAuthenticated) {
      console.log('authenticated');
    } else {
      console.log('not authenticated');
    }*/
 }

componentDidUpdate(prevProps){
	const { error } = this.props;
	if(error !== prevProps.error){

		//check for login error
		if(error.id === 'LOGIN_FAIL'){

			this.setState({ msg : error.msg.msg });
			


		} else {

			this.setState({ msg: null });
			
			
		}

	}

	//After update, if auth is valid, redirect

	if (this.props.isAuthenticated) {
  
    this.props.history.push('/home');

    }
	
	
}

onChange = e =>{
	this.setState({ [e.target.name]: e.target.value });

};


handleSubmit = (event) => {

    event.preventDefault();

    console.log("looog");
    
     const { email, password } = this.state;

    //Create user object
	const user = {

		email,
		password

	};

	//Attempt to login
	this.props.login(user);

	//set state to redirect user after 

  };




render(){

{/*	if (this.state.redirect === true) {
      return <Redirect to='/home' />
    }*/}

		
		return(
			<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
				 {/*Right*/}
				<div class="min-h-screen">


						


			<div className="container justify-around bg-blue-0 mx-auto my-8 px-4 h-full">


			 <div class="flex justify-center">
		            
		            <p class="text-red-600 text-opacity-100 text-6xl" style={{ fontFamily: 'Righteous, serif' }}>kuizine</p>
		            
		      </div>

            <div className="flex content-center items-center justify-center h-full" >
              <div className="w-full lg:px-16 sm:px-0 md:px-0">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-md border-0" >
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                      	The Food Community Awaits!
                      </h6>
                    </div>
                   
                    
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  
                    <Form onSubmit={this.handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="text"
			              name="email"
			              id="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
			              name="password"
			              id="password"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
                          placeholder="Password"
                          onChange={this.onChange}
                        />
                      </div>
                     
                      <div className="text-center mt-6">
                        <button
                          className="bg-red-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                        >
                          Sign In
                        </button>
                      </div>

                           <hr className="mt-4 border-b-1 border-gray-400" />
                           <p class="mt-4 text-grey-400 text-opacity-100 text-sm">New to Kuizine? Create a new account</p>

                         

                       {/*<div className="text-center mt-6">
                        <button
                          className="bg-red-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                        	>
                          Sign Up*/}

                      <RegisterComponent />

                    </Form>
                  </div>
                </div>
                {/*<div className="flex flex-wrap mt-4">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className=" no-underline text-gray-600"

                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>

                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="no-underline text-gray-600"
                    >
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>

				</div>

				{/*Left*/}
				<div class="min-h-screen bg-grey-100 shadow-xl">
					<div class="bg-local w-full h-screen" style={{ backgroundImage:  "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5)), url(" + require("../../res/images/login-doodle.png") + ")" }}></div>
				</div>


				
			</div>			
		); 
	
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});


export default withRouter(connect(mapStateToProps, { login, clearErrors })(LoginComponent));