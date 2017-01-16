import { createSelector } from 'reselect';

export const getCollectionData = state => state.collectionData;

const getSelectedPlaylistId = createSelector(
	getCollectionData,
	data => data.selectedId
);

const getPlaylists = createSelector(
	getCollectionData,
	data => data.playlists
);

const getSelectedPlaylist = createSelector(
	[getPlaylists, getSelectedPlaylistId],
	(playlists, selectedPlaylistId) => playlists[selectedPlaylistId]
);

export const getCurrentTracklist = createSelector(
	getSelectedPlaylist,
	selectedPlaylist => selectedPlaylist.tracklist
);

export const getIsCollectionReady = createSelector(
	getCollectionData,
	data => data.bInit
);
