import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Track from './Track';
import './tracklist.scss';

class TrackList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<table className="tracklist-playlist">
				<thead className="tl-header">
					<tr>
						<th className="tl-play"></th>
						<th className="tl-name">Song</th>
						<th className="tl-artists">Artist</th>
					</tr>
				</thead>
				<tbody>
					{this.props.tracklist.map((track, index) => {
						return (
							<Track key={index} track={track} />
						);
					})}
				</tbody>
			</table>
		);
	}
}

TrackList.propTypes = {
	tracklist: PropTypes.array,
};

const mapStateToProps = (state) => {
	const selectedPlaylist = state.collectionData.playlists[state.collectionData.selectedId];
	return {
		tracklist: selectedPlaylist.tracklist,
	};
};

export default connect(mapStateToProps)(TrackList);
