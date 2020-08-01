import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class Timeline extends Component {


componentDidMount(){
	this.props.getItems();

}


render(){

		const { items } = this.props.item;

		return(<div> INSH </div>); 
	
	}
}

Timeline.propTypes = {

	getItems:PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item : state.item
});

export default connect(mapStateToProps, {getItems})(Timeline);