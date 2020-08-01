import {
	PUBLISH_SUCCESS,
	PUBLISH_FAIL,
	GET_RECIPE_ITEMS,
	GET_RECIPE_ITEMS_FAIL,
	ITEMS_RECIPE_LOADING,
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isPublished: null,
	isLoading: false,
	user: null,

	recipe_items: [],
	loading: false,
	getsuccess: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case PUBLISH_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isPublished: true,
				isLoading: false,
			};

		case PUBLISH_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isPublished: false,
				isLoading: false,
			};
		case GET_RECIPE_ITEMS:
			return {
				...state,
				recipe_items: action.payload,
				loading: false,
				getsuccess: true,
			};

		case GET_RECIPE_ITEMS_FAIL:
			return {
				...state,
				recipe_items: [],
				loading: false,
				getsuccess: false,
			};

		case ITEMS_RECIPE_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
}
