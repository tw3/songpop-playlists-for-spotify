import React, { PropTypes } from 'react';
import MainHeader from './header/MainHeader';
import TrackList from './tracklist/TrackList';
import './main.scss';

const Main = () => {
	return (
		<div className="content-wrapper">
			<div id="main-title">
				<h2>Playlist</h2>
			</div>
			<div className="header-wrapper">
				<MainHeader />
			</div>
			<div className="tracklist-wrapper">
				<TrackList />
			</div>
		</div>
	);
};

export default Main;
