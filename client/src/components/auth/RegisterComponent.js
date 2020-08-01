import React, { UseState, Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Button, NavLink,
  Form, FormGroup, Label,
  Input, FormText,
  Modal,
  ModalHeader,
  Alert,
  ModalBody } from 'reactstrap';
import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';




class RegisterComponent extends Component {

	state = {

		modal: false,
		name: '',
		email: '',
		password: '',
		msg: null

	};


static propTypes = {

	isAuthenticated: PropTypes.bool,
	error: PropTypes.object.isRequired,
	register: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired
};



componentDidUpdate(prevProps){
	const { error } = this.props;
	if(error !== prevProps.error){

		//check for register error
		if(error.id === 'REGISTER_FAIL'){

			this.setState({ msg : error.msg.msg });


		} else {

			this.setState({ msg: null });
		}

	}
	//if authenticated close modal
	if (this.state.modal) {
		if (this.props.isAuthenticated){
			this.toggleModal();
		}
	}
}



toggleModal = () => {
	//Clear errors
	this.props.clearErrors();

	this.setState({
		modal: !this.state.modal
	});

	const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    modal.classList.toggle('opacity-0');
    modal.classList.toggle('pointer-events-none');
    modal.classList.toggle('invisible');
   
    body.classList.toggle('modal-active');
};

onChange = e =>{

	this.setState({ [e.target.name]: e.target.value });

};


/*onSubmit = e =>{ e.preventDefault(); //instead of handle submit};*/

handleRegSubmit = (event) => {

    event.preventDefault();
    console.log('Form submitted');

    const { name, email, password } = this.state;

    //Create user object
	const newUser = {

		name,
		email,
		password

	};

	//Attempt to register
	this.props.register(newUser);


  };

render(){

	
		return(
				<div>
			 
			      <div className="text-center mt-6">
                        <button
                          className="bg-red-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          onClick = {this.toggleModal}
                          style={{ transition: "all .15s ease" }}
                        	>
                          Sign Up
                        </button>

                      </div>
			      
			      	<div class="modal opacity-0 pointer-events-none invisible fixed w-full h-full top-0 left-0 flex items-center justify-center">
					    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-75" onClick = {this.togglePublishModal}></div>
					    
					    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
					      
					      

					     
					      <div class="modal-content py-3 text-left px-3">
					       
					        <div class="flex justify-between items-center pb-3">
					          <p class="text-2xl font-bold text-red-600">Sign Up here</p>
					          <div class="modal-close cursor-pointer z-50" onClick = {this.toggleModal}>
					            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
					              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
					            </svg>
					          </div>
					        </div>

					        
							{/* { this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null}*/}

							 { this.state.msg ? 
							 	<div class="text-left mb-3">
								  <div class="p-2 bg-gray-600 items-center text-white leading-none md:rounded-full flex md:inline-flex" role="alert">
								   <svg class="fill-current h-6 w-6 bg-gray-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
								    <span class="font-semibold mr-2 text-left flex-auto">{ this.state.msg }</span>
								   </div>
								</div>
							 	: null }

					          <Form onSubmit={this.handleRegSubmit}>
					            <FormGroup>
					              <label
			                          className="block text-gray-600 text-xs font-bold mb-2"
			                          htmlFor="grid-password"
			                        >
			                          Name
			                        </label>
					              
					              <input
			                          type="text"
			                          name="name"
					                  id="name"
			                          className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
			                          placeholder="Name"
			                          onChange={this.onChange}
			                        />
					              <label
			                          className="block text-gray-600 text-xs font-bold mb-2"
			                          htmlFor="grid-password"
			                        >
			                          Email
			                        </label>
					              
					              <input
			                          type="email"
			                          name="email"
					                  id="email"
			                          className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
			                          placeholder="Email"
			                          onChange={this.onChange}
			                        />
					              <label
			                          className="block text-gray-600 text-xs font-bold mb-2"
			                          htmlFor="grid-password"
			                        >
			                          Password
			                        </label>
					              
					              <input
		                          type="password"
		                          name="password"
					              id="password"
		                          className="mb-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow-md focus:outline-none focus:shadow-outline w-full"
		                          placeholder="Password"
		                          onChange={this.onChange}
		                        	/>

					            

					              <button
			                          className="bg-red-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 w-full"
			                          type="submit"
			                        >
			                          Sign Up
			                      </button>

					            </FormGroup>
					          </Form>

					        
					        {/*<div class="flex justify-end pt-2">
					          <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
					          <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" onClick = {this.toggleModal}>Close</button>
					        </div>*/}
					        
					      </div>
					    </div>
					  </div>

			      </div>
			       
			    
		 ); 
	
	}
}



const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});


export default connect(mapStateToProps, { register, clearErrors })(RegisterComponent);