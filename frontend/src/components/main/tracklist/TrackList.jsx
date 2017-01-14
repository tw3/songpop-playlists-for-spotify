import React, { PropTypes } from 'react';
import Track from './Track';
import tracklist from './__stub__/TrackList-data.js';
import './tracklist.scss';

const TrackList = (props) => {
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
};

TrackList.propTypes = {};

export default TrackList;
