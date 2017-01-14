import React, { Component, PropTypes } from 'react';
import { Form, FormControl, Glyphicon } from 'react-bootstrap';
import logger from 'js-logger';

class PlaylistNavFilter extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		logger.debug('submit');
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<div className="input-wrapper">
					<i className="spoticon-search-16"></i>
					<FormControl
						id="nav-filter-input"
						type="text" placeholder="Filter playlists"
					>
					</FormControl>
					<i className="spoticon-x-16 cross"></i>
				</div>
			</Form>
		);
	}
}

PlaylistNavFilter.propTypes = {};

export default PlaylistNavFilter;
