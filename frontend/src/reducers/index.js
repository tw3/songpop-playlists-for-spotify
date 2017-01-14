import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
//import { reducer as formReducer } from "redux-form";
import playlistReducer from './playlist-reducer';

// main reducers
export const reducers = combineReducers({
	routing: routerReducer,
	playlists: playlistReducer,
	//form: formReducer,
});
