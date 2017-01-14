import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Playlist = (props) => {
	const { playlist, showPlaylist } = props;
	const listGroupItemClasses = ['list-group-item'];
	if (playlist.selected) listGroupItemClasses.push('active');
	return (
		<ListGroupItem className={listGroupItemClasses.join(' ')}>
			<a onClick={() => showPlaylist(playlist)}>
				{(playlist.imageUrl) ? (
					<div className="media simple playlist">
						<div className="media-image">
							<div className="media-placeholder"></div>
							<div
								className="media-image-internal"
								style={{ backgroundImage: `url(${playlist.imageUrl})` }}
							>
							</div>
						</div>
					</div>
				) : (
					<div className="media simple spoticon spoticon-playlist-32"></div>
				)}
				<div className="item-data">
					<span>{playlist.label}</span>
					<span className="text-secondary">
						<span style={{ display: 'none' }}>by Ted Weatherly</span>
					</span>
				</div>
			</a>
		</ListGroupItem>
	);
};

Playlist.propTypes = {
	playlist: PropTypes.object.isRequired,
	showPlaylist: PropTypes.func.isRequired,
};

export default Playlist;
