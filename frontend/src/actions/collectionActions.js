import * as types from '../constants/actionTypes';

export const collectionFetchPlaylists = () => ({
	type: types.COLLECTION_FETCH_PLAYLISTS,
});

export const collectionShowPlaylist = (playlist) => ({
	type: types.COLLECTION_SHOW_PLAYLIST,
	payload: { playlist },
});
