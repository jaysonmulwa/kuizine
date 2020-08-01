import axios from 'axios';

import { returnErrors } from  './errorActions';

import { POST_SUCCESS, POST_FAIL, GET_POST_ITEMS, GET_POST_ITEMS_FAIL, ITEMS_POST_LOADING } from './types';


//Publish

export const post = ({ post_dtl, file, filename }) => dispatch =>{
	//Headers
	const config = {

		headers: {
			'Content-type': 'multipart/form-data'
		}
	};

	const formData = new FormData();
	formData.append('post_dtl',post_dtl);
    formData.append('file',file);
    formData.append('filename',filename);

	//Request Body
	
	axios
	.post('/api/post', formData, config)
	.then(res => dispatch({
		type: POST_SUCCESS,
		payload: res.data
	}))
	.catch(err => {
		dispatch(returnErrors(err.response.data, err.response.status, 'POST_FAIL' ));
		dispatch({
			type: POST_FAIL
		});
	});
};

export const getPosts = () => dispatch => {

	dispatch(setPostsLoading());

	axios
	.get('/api/post')
	.then(res => dispatch({
		type: GET_POST_ITEMS,
		payload: res.data
	}))
	.catch(err => {
		dispatch(returnErrors(err.response.data, err.response.status, 'GET_POST_ITEMS_FAIL' ));
		dispatch({
			type: GET_POST_ITEMS_FAIL
		});
	});
};




//addItem 

// DeleteItems
export const setPostsLoading = () => {

	return{

		type: ITEMS_POST_LOADING

	};
};

//Setup Config/headers and token

export const tokenConfig = getState =>{
		//Get token from local storage
	const token = getState().auth.token;

	//Headers
	const config = {

		headers: {
			"Content-type": "application/json"
		}
	};

	//if token, add to headers
	if(token){

		config.headers['x-auth-token'] = token;

	}
	return config;
};

