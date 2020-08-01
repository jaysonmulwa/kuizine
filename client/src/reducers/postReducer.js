import { POST_SUCCESS, POST_FAIL, GET_POST_ITEMS, GET_POST_ITEMS_FAIL, ITEMS_POST_LOADING } from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isPublished: null,
	isLoading: false,
	user: null,

	post_items: [],
	loading: false,
	getsuccess: null,

};

export default function (state = initialState, action) {
	switch (action.type) {
		case POST_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isPublished: true,
				isLoading: false,
			};

		case POST_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isPublished: false,
				isLoading: false,
			};
		case GET_POST_ITEMS:
			return {

				...state,
				post_items: action.payload,
				loading: false
			};

		case GET_POST_ITEMS_FAIL:
			return {

				...state,
				post_items: [],
				loading: false,
				getsuccess: false,
			};

		case ITEMS_POST_LOADING:
			return {

				...state,
				loading: true
			};

		default:
			return state;
	}
}
