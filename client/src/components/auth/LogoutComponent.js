import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import {  MdPowerSettingsNew } from "react-icons/md";
import { slide as Menu } from "react-burger-menu";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';


class LogOut extends Component {

state = {

		modal: false

};

static propTypes = {
	
	logout: PropTypes.func.isRequired
};

toggle = () => {
	//Clear errors
	//this.props.clearErrors();

	this.setState({
		modal: !this.state.modal
	});
};

render(){

	

		return(
			<div>
			
			<button className="outline-none focus:outline-none w-full" onClick = {this.toggle}><div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-semibold hover:text-luminous-red rounded-lg"><MdPowerSettingsNew size="3rem" className="bg-gray-200 rounded-full p-2"/><span className="ml-3">Log Out</span></div></button>
	          
	            
	       
	        
	      	<Modal isOpen={this.state.modal} toggle={this.toggle}>
			        
			        <ModalBody>

			        Are you sure you want to log out?

			        <Button outline color="danger" onClick = {this.props.logout} href="#" block>Log Out</Button>

			          
			        </ModalBody>

			      </Modal>
			 </div>
	      ); 
	
	}
}




export default connect(null, { logout })(LogOut);