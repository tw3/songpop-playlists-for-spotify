import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import logger from 'js-logger';
import Playlist from './Playlist';

function showPlaylist(playlist) {
	logger.debug(`showPlaylist: playlist = ${JSON.stringify(playlist)}`);
}

const PlaylistNav = (props) => {
	const { playlists } = props;
	// react bootstrap seems to ignore the componentClass attribute for <ListGroup />
	return (
		<ListGroup componentClass="div">
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

PlaylistNav.propTypes = {
	playlists: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
	return {
		playlists: state.playlists,
	};
};

export default connect(mapStateToProps)(PlaylistNav);
