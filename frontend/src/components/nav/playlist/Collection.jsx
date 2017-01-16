import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import logger from 'js-logger';
import { collectionShowPlaylist } from '../../../actions/collectionActions';
import { getCollectionData } from '../../../selectors';
import Playlist from './Playlist';

class Collection extends Component {
	constructor(props) {
		super(props);

		// Bind <this> to event handlers
		this.showPlaylist = this.showPlaylist.bind(this);
	}

	showPlaylist(playlist) {
		// TODO activate fetch by switching the URL
		this.props.dispatch(collectionShowPlaylist(playlist));
		logger.debug(`showPlaylist: playlist = ${JSON.stringify(playlist)}`);
	}

	render() {
		const { collectionData } = this.props;
		return (
			<ListGroup componentClass="div">
				{collectionData.playlists.filter((playlist, index) => {
					// TODO do filtering here
					return true;
				}).map((playlist, index) => {
					return (
						<Playlist
							key={index}
							playlist={playlist}
							selectedId={collectionData.selectedId}
							showPlaylist={this.showPlaylist}
						/>
					);
				})}
			</ListGroup>
		);
	}
}

Collection.propTypes = {
	dispatch: PropTypes.func.isRequired,
	collectionData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		collectionData: getCollectionData(state),
	};
};

export default connect(mapStateToProps)(Collection);
