export function IsPresentInPlaylist(state_data, video, playlistName) {
    const playlist = state_data.playlists.find((i) => i._playlistName === playlistName);

    return (playlist.playlistVideos.filter((i) => i._id === video._id).length) > 0;
}