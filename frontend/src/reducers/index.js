import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
//import { reducer as formReducer } from "redux-form";
//import obj from './obj-reducer';

// main reducers
export const reducers = combineReducers({
	routing: routerReducer,
	//form: formReducer,
	//obj: obj,
});
