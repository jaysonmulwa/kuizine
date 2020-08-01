import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdHome, MdPersonOutline, MdBookmarkBorder, MdShoppingBasket, MdDescription, MdAdd, MdSearch, MdPlusOne } from "react-icons/md";
import { slide as Menu } from "react-burger-menu";
import LogoutComponent from "./auth/LogoutComponent";
import PropTypes from 'prop-types';

class SideBar extends Component {

static propTypes = {
	
	auth: PropTypes.object.isRequired
};

render(){

	const { isAuthenticated, user } = this.props.auth;

	const authLinks = ( 

		<span className="">
		<strong>{ user ? `Welcome ${user.name}` : ''}</strong>
		</span>
	);

	const guestLinks = ( 

		<LogoutComponent />

		);

		return(

		<div>



		  <Menu right className="">
	      
	      	<button className="outline-none focus:outline-none w-full"><div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-semibold hover:text-luminous-red rounded-lg"><MdHome size="3rem" className="bg-gray-200 rounded-full p-2"/><span className="ml-3">Home</span></div></button>
	        <button className="outline-none focus:outline-none w-full "><div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-semibold hover:text-luminous-red rounded-lg"><MdBookmarkBorder size="3rem" className="bg-gray-200 rounded-full p-2"/><span className="ml-3">Bookmarks</span></div></button>
	          <button className="outline-none focus:outline-none w-full"><div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-semibold hover:text-luminous-red rounded-lg"><MdShoppingBasket size="3rem" className="bg-gray-200 rounded-full p-2"/><span className="ml-3">Buy Ingredients</span></div></button>
	          <button className="outline-none focus:outline-none w-full"><div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-semibold hover:text-luminous-red rounded-lg"><MdDescription size="3rem" className="bg-gray-200 rounded-full p-2"/><span className="ml-3">Eat Out</span></div></button>
	          <button className="outline-none focus:outline-none w-full"><div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-semibold hover:text-luminous-red rounded-lg"><MdSearch size="3rem" className="bg-gray-200 rounded-full p-2"/><span className="ml-3">Search Recipes</span></div></button>
	          
	          <button className="outline-none focus:outline-none w-full"><div className="hover:bg-gray-200 text-gray-600 text-lg mr-4 px-2 py-2 flex flex-row items-center font-semibold hover:text-luminous-red rounded-lg"><MdPlusOne size="3rem" className="bg-gray-200 rounded-full p-2"/><span className="ml-3">Curated Recipes</span></div></button>
	          

	      { isAuthenticated ? authLinks : guestLinks }
	      
	    </Menu>

   		</div>
   ); 
	
	}
}


const mapStateToProps = (state) => ({
	auth : state.auth
});

export default connect(mapStateToProps, null)(SideBar);