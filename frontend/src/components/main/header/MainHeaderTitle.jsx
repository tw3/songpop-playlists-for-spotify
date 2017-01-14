import React, { PropTypes } from 'react';

const MainHeaderButtons = (props) => {
	return (
		<h1 className="header-playlist-title">
			<span>Psych Rock</span>
			{/* TODO: Handle long playlist names */}
		</h1>
	);
};

MainHeaderButtons.propTypes = {};

export default MainHeaderButtons;
