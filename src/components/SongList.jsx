import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
	renderList = () =>
		this.props.songs.map((song) => (
			<div key={song.title} className="item">
				<div className="right floated content">
					<button onClick={() => this.props.selectSong(song)} className="ui button primary">
						Select
					</button>
				</div>
				<div className="content">{song.title}</div>
			</div>
		));
	render() {
		console.log(this.props, 'FROM LIST');

		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

const mapStatetoProps = (state) => {
	return { songs: state.songs };
};

export default connect(mapStatetoProps, { selectSong })(SongList);
