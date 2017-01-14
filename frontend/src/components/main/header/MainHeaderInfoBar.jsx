import React, { PropTypes } from 'react';

const MainHeaderInfoBar = (props) => {
	return (
		<div className="header-bar">
			<div className="container">
				<div className="pull-left">
					<span>130 songs</span>
				</div>
				<span>&nbsp;</span>
			</div>
		</div>
	);
};

MainHeaderInfoBar.propTypes = {};

export default MainHeaderInfoBar;
