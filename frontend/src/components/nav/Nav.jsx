import React, { PropTypes } from 'react';
import PlaylistFilter from './playlist/PlaylistFilter';
import Collection from './playlist/Collection';
import './nav.scss';

const Nav = () => {
	return (
		<div id="nav-container">
			<div id="nav-title">
				<h2>SongPop Playlists</h2>
			</div>
			<PlaylistFilter />
			<Collection />
		</div>
	);
};

Nav.propTypes = {};

export default Nav;
