import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { collectionFetchList, collectionShowPlaylist } from './collection-saga';
import * as types from '../constants/actionTypes';

// main saga generators
export function* sagas() {
	yield [
		fork(takeLatest, types.COLLECTION_FETCH_PLAYLISTS, collectionFetchList),
		fork(takeLatest, types.COLLECTION_SHOW_PLAYLIST, collectionShowPlaylist),
	];
}
