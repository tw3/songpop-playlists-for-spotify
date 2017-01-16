import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCurrentTracklist } from '../../../selectors';
import Track from './Track';
import './tracklist.scss';

class TrackList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { tracklist } = this.props;
		if (tracklist) {
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
					{tracklist.map((track, index) => {
						return (
							<Track key={index} track={track} />
						);
					})}
					</tbody>
				</table>
			);
		}
		return (
			<p>Therea are no tracks for this playlist</p>
		);
	}
}

TrackList.propTypes = {
	tracklist: PropTypes.array,
};

const mapStateToProps = (state) => {
	return {
		tracklist: getCurrentTracklist(state),
	};
};

export default connect(mapStateToProps)(TrackList);
