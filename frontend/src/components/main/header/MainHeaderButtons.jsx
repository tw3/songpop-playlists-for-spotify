import React, { PropTypes } from 'react';

const MainHeaderButtons = (props) => {
	return (
		<div className="header-controllers">
			<button className="btn btn-small btn-icon btn-primary">Add to Spotify</button>
			<button className="btn btn-small btn-icon btn-primary">Copy Song URIs</button>
		</div>
	);
};

MainHeaderButtons.propTypes = {};

export default MainHeaderButtons;
