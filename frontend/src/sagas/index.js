import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
//import { objFetchSomething } from './obj-saga';

// main saga generators
export function* sagas() {
	yield [
		//fork(takeLatest, 'OBJ_FETCH_SOMETHING', objFetchSomething),
	];
}
