import axios from 'axios';
import logger from 'js-logger';

const playlistsURL = "https://jsonblob.com/api/jsonBlob/55829185-d8fb-11e6-b16a-0ba4bfb4ade7";
const tracklistURL = "https://jsonblob.com/api/jsonBlob/71b950f7-d8fb-11e6-b16a-af5c51fc6231";

const convertPlaylistData = (playlistsJSON) => {
	let fakeId = 0;
	const limit = 5;
	const playlists = [];
	playlistsJSON.sections.forEach(sectionData => {
		const contentArr = sectionData.content;
		// Determine if the content is the artist, titles, or neither
		if (Array.isArray(contentArr) && contentArr.length > 0) {
			contentArr.forEach(content => {
				//console.log(content);
				content.elements.forEach(playlistData => {
					//console.log(playlistData.text);
					if (fakeId < limit) {
						playlists.push({
							id: fakeId++,
							label: playlistData.text,
						});
					}
				});
			});
		}
	});
	return playlists;
};

const convertTracklistData = (tracklistJSON) => {
	//console.log(tracklistURL);
	let artist;
	let title;
	const tracklist = [];
	tracklistJSON.sections.forEach(sectionData => {
		const contentArr = sectionData.content;
		// Determine if the content is the artist, titles, or neither
		if (Array.isArray(contentArr) && contentArr.length > 1) {
			//console.log(contentArr);
			contentArr.forEach(content => {
				//console.log(content);
				if (content.hasOwnProperty('text')) {
					artist = content.text;
				} else if (content.hasOwnProperty('type') &&
					content.type === 'list' &&
					content.hasOwnProperty('elements')) {
					content.elements.forEach(titleData => {
						title = titleData.text;
						tracklist.push({ artist, title });
					});
				}
			});
		}
	});
	return tracklist;
};

export default class ApiPlaylist {
	static getPlaylists() {
		return new Promise(resolve => {
			axios.get(playlistsURL)
				.then(response => {
					logger.debug(response);
					resolve(convertPlaylistData(response.data));
				})
				.catch(error => { // TODO handle error scenario
					logger.debug(error);
					resolve();
				});
		});
	}

	static getTracklist(playlist) {
		return new Promise(resolve => {
			axios.get(tracklistURL)
				.then(response => {
					logger.debug(response);
					resolve(convertTracklistData(response.data));
				})
				.catch(error => { // TODO handle error scenario
					logger.debug(error);
					resolve();
				});
		});
	}
}
