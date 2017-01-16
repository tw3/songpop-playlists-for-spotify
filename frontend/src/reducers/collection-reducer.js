import * as types from '../constants/actionTypes';

export default (inputCollectionData = {}, action = {}) => {
	let playlistId;
	let playlistIdx;
	let playlist;
	let newPlaylist;
	switch (action.type) {
		case types.COLLECTION_SAVE_PLAYLISTS:
			// Initialize collection if necessary
			if (inputCollectionData.bInit) {
				return inputCollectionData;
			}
			return {
				playlists: action.payload.playlists,
				selectedId: 0,
				bInit: true,
			};
		case types.COLLECTION_SHOW_PLAYLIST:
			playlistId = action.payload.playlist.id;
			// Update the selectedId
			return {
				...inputCollectionData,
				selectedId: playlistId,
			};
		case types.COLLECTION_SET_TRACKLIST:
			playlist = action.payload.playlist;
			playlistIdx = playlist.id;
			newPlaylist = { ...playlist, tracklist: action.payload.tracklist };
			return {
				...inputCollectionData,
				playlists: inputCollectionData.playlists.map(loopPlaylist => {
					if (loopPlaylist.id === playlist.id) {
						return newPlaylist;
					}
					return loopPlaylist;
				}),
				//playlists: [
				//	...inputCollectionData.playlists.slice(0, playlistIdx),
				//	newPlaylist,
				//	...inputCollectionData.playlists.slice(playlistIdx + 1),
				//],
			};
		default:
			return inputCollectionData;
	}
};
