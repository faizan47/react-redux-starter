export const selectSong = (song) => ({ type: 'SONG_SELECTED', payload: song });

export const songDetails = (song) => ({ type: 'SONG_SELECTED', payload: song.title });
