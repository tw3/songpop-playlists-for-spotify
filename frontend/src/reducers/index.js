import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import collectionReducer from './collection-reducer';

// main reducers
export const reducers = combineReducers({
	routing: routerReducer,
	collectionData: collectionReducer,
});
