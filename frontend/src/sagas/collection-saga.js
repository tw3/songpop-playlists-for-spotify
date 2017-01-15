import { call, put } from 'redux-saga/effects';
import ApiCollection from '../api/collection-api.js';

export function* collectionFetchList() {
	// call the api to get the collection data
	const playlists = yield call(ApiCollection.getPlaylists);

	// save the events in state
	yield put({
		type: 'COLLECTION_SAVE_PLAYLISTS',
		payload: { playlists },
	});
}

