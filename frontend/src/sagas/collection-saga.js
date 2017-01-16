import { call, put } from 'redux-saga/effects';
import ApiCollection from '../api/collection-api.js';
import * as types from '../constants/actionTypes';

export function* collectionFetchList() {
	try {
		// call the api to get the collection data
		const playlists = yield call(ApiCollection.getPlaylists);

		// TODO handle error cases, e.g. no playlists

		// save the collection in state
		yield put({
			type: types.COLLECTION_SAVE_PLAYLISTS,
			payload: {
				playlists,
			},
		});

		// show the first playlist in the list
		yield put({
			type: types.COLLECTION_SHOW_PLAYLIST,
			payload: {
				playlist: playlists[0],
			},
		});
	} catch (error) {
		yield put({
			type: types.COLLECTION_SAVE_PLAYLISTS,
			payload: new Error(error),
			error: true,
		});
	}
}

