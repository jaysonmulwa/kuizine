import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';

import PropTypes from 'prop-types';
import { Card,Image, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import '../../App.css';

const NavBar = () => (


  <div className="navbar">



   <Container fluid={true}>
      <Row className="nav_con">


        
        <Col lg="4" md="4" sm="2" xs="2" className="nav_con_1"></Col>
        <Col lg="4" md="4" sm="8" xs="8" className="nav_con_2"><h3>Kuizine</h3></Col>
        <Col lg="4" md="4" sm="2"  xs="2" className="nav_con_3"></Col>


      </Row>
  </Container>

   </div>

);

const LoginArea = () => (

<div className="login_area">

   <Container fluid={true}>
      <Row className="nav_con">


        
        <Col lg="4" md="4" sm="2" xs="2" className="nav_con_1"></Col>
        <Col lg="4" md="4" sm="8" xs="8" className="nav_con_2"><h3>Kuizine</h3></Col>
        <Col lg="4" md="4" sm="2"  xs="2" className="nav_con_3"></Col>


      </Row>
  </Container>

   </div>

);

class Login extends Component {


componentDidMount(){
	this.props.getItems();

}


render(){

		const { items } = this.props.item;

		return(
		<div>
		<NavBar/>
			<LoginArea />
			</div>
			); 
	
	}
}

Login.propTypes = {

	getItems:PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item : state.item
});

export default connect(mapStateToProps, {getItems})(Login);