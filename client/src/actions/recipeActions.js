import axios from "axios";

import { returnErrors } from "./errorActions";

import {
	PUBLISH_SUCCESS,
	PUBLISH_FAIL,
	GET_RECIPE_ITEMS,
	GET_RECIPE_ITEMS_FAIL,
	ITEMS_RECIPE_LOADING,
} from "./types";

//Publish

export const recipe = ({
	recipe_name,
	ingredients,
	steps,
	time,
	origin,
	file,
	filename,
}) => (dispatch) => {
	//Headers
	const config = {
		headers: {
			"Content-type": "multipart/form-data",
		},
	};

	const formData = new FormData();
	formData.append("recipe_name", recipe_name);
	formData.append("ingredients", ingredients);
	formData.append("steps", steps);
	formData.append("time", time);
	formData.append("origin", origin);
	formData.append("file", file);
	formData.append("filename", filename);

	//Request Body
	//const body = JSON.stringify({ recipe_name, ingredients, steps, time, origin, file, filename});

	axios
		.post("/api/recipe", formData, config)
		.then((res) =>
			dispatch({
				type: PUBLISH_SUCCESS,
				payload: res.data,
			})
		)
		.catch((err) => {
			dispatch(
				returnErrors(
					err.response.data,
					err.response.status,
					"PUBLISH_FAIL"
				)
			);
			dispatch({
				type: PUBLISH_FAIL,
			});
		});
};

export const getRecipes = () => (dispatch) => {
	dispatch(setRecipesLoading());

	axios
		.get("/api/recipe")
		.then((res) =>
			dispatch({
				type: GET_RECIPE_ITEMS,
				payload: res.data,
			})
		)
		.catch((err) => {
			dispatch(
				returnErrors(
					err.response.data,
					err.response.status,
					"GET_RECIPE_ITEMS_FAIL"
				)
			);
			dispatch({
				type: GET_RECIPE_ITEMS_FAIL,
			});
		});
};

//addItem

// DeleteItems
export const setRecipesLoading = () => {
	return {
		type: ITEMS_RECIPE_LOADING,
	};
};

//Setup Config/headers and token

export const tokenConfig = (getState) => {
	//Get token from local storage
	const token = getState().auth.token;

	//Headers
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};

	//if token, add to headers
	if (token) {
		config.headers["x-auth-token"] = token;
	}
	return config;
};
