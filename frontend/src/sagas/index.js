import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { collectionFetchList } from './collection-saga';

// main saga generators
export function* sagas() {
	yield [
		fork(takeLatest, 'COLLECTION_FETCH_PLAYLISTS', collectionFetchList),
	];
}
