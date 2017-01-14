import React, { PropTypes } from 'react';
import PlaylistNavFilter from './playlist/PlaylistNavFilter';
import PlaylistNav from './playlist/PlaylistNav';
import './nav.scss';

const Nav = () => {
	return (
		<div id="nav-container">
			<div id="nav-title">
				<h2>SongPop Playlists</h2>
			</div>
			<PlaylistNavFilter />
			<PlaylistNav />
		</div>
	);
};

Nav.propTypes = {};

export default Nav;
