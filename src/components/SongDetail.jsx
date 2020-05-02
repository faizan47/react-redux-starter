import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong: { title, duration } }) => {
	if (title) {
		return (
			<div>
				<div className="box">{title}</div>
				<div className="box">{duration}</div>
			</div>
		);
	} else {
		return <div>Select a song...</div>;
	}
};

const mapStatetoProps = (state) => ({
	selectedSong: state.selectedSong
});
export default connect(mapStatetoProps)(SongDetail);
