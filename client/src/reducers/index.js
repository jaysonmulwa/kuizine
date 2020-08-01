import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import recipeReducer from "./recipeReducer";
import postReducer from "./postReducer";

export default combineReducers({
	item: itemReducer,
	error: errorReducer,
	auth: authReducer,
	recipe: recipeReducer,
	post: postReducer,
});
