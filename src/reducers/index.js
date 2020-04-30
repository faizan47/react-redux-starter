import { combineReducers } from 'redux';

const SongsReducer = () => [
	{
		title: 'Song 1',
		duration: '3:18'
	},
	{
		title: 'Just another song',
		duration: '4:03'
	},
	{
		title: 'Yet another song',
		duration: '3:22'
	}
];

const SelectedSongReducer = (selectedSong = {}, action) => {
	if (action.type === 'SONG_SELECTED') return action.payload;
	return selectedSong;
};
export default combineReducers({
	songs: SongsReducer,
	selectedSong: SelectedSongReducer
});
