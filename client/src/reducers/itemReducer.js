
import { GET_ITEMS, GET_ITEMS_FAIL, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from '../actions/types';

const initialState = {


	items: [],
	loading: false,
	getsuccess: null,


};


export default function(state = initialState, action){

	switch(action.type){

		case GET_ITEMS:
			return {

				...state,
				items: action.payload,
				loading: false
			};

		case GET_ITEMS_FAIL:
			return {

				...state,
				items: [],
				loading: false,
				getsuccess: false,
			};

		case ITEMS_LOADING:
			return {

				...state,
				loading: true
			};
		default:
			return state;


	}
}