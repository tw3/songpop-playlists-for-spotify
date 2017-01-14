import React, { PropTypes } from 'react';

const Track = (props) => {
	const { track } = props;
	const rowClassArray = ['tl-row'];
	if (track.selected) {
		rowClassArray.push('selected');
		rowClassArray.push('selection-focus');
	}
	return (
		<tr className={rowClassArray.join(' ')}>
			<td className="tl-cell tl-play">
				<button className="btn btn-small btn-icon btn-play" type="button"></button>
			</td>
			<td className="tl-cell tl-name">
				<div className="tl-highlight">
					{track.title}
				</div>
			</td>
			<td className="tl-cell tl-artists">
				<div className="tl-highlight">
					<span>{track.artist}</span>
				</div>
			</td>
		</tr>
	);
};

Track.propTypes = {
	track: PropTypes.object.isRequired,
};

export default Track;
