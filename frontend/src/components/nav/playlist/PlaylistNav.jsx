import React, { PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';
import logger from 'js-logger';
import Playlist from './Playlist';
import playlists from './__stub__/PlaylistNav-data';

function showPlaylist(playlist) {
	logger.debug(`showPlaylist: playlist = ${JSON.stringify(playlist)}`);

}

const PlaylistNav = (props) => {
	return (
		<ListGroup componentClass='div'>
			{playlists.filter((playlist, index) => {
				return true;
			}).map((playlist, index) => {
				return (
					<Playlist
						key={index}
						playlist={playlist}
						showPlaylist={showPlaylist}
					/>
				);
			})}
		</ListGroup>
	);
};

PlaylistNav.propTypes = {};

export default PlaylistNav;
