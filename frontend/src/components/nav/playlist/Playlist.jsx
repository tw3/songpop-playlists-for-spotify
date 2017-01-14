import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Playlist = (props) => {
	const { playlist, showPlaylist } = props;
	const listGroupItemClasses = ['list-group-item'];
	if (playlist.selected) listGroupItemClasses.push('active');
	return (
		<div className={listGroupItemClasses.join(' ')}>
			<a onClick={() => showPlaylist(playlist)}>
				{(playlist.imageUrl) ? (
					<div className="media simple playlist">
						<div className="media-image">
							<div className="media-placeholder"></div>
							<div
								className="media-image-internal"
								style={{backgroundImage: 'url(https://d3rt1990lpmkn.cloudfront.net/300/20e68538f6ca047d16de7ec4a97b6bd16e1cc7ddcadcc53102e43ee320503f8d11f2330164d9ae9e756ce4389c7bdbf0da33c4703f8d2754a1635a47f0848f207188c5b86319730b4a705a6c37a4c069)'}}
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
						<span style={{display: 'none'}}>by Ted Weatherly</span>
					</span>
				</div>
			</a>
		</div>
	);
};

Playlist.propTypes = {
	playlist: PropTypes.object.isRequired,
	showPlaylist: PropTypes.func.isRequired,
};

export default Playlist;
