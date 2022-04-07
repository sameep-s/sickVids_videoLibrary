export function DataReducer(state_data, action) {

    function videoIsPresent(video, playlistName) {
        const playlist = state_data.playlists.find((i) => i._playlistName === playlistName);

        return playlist.playlistVideos.filter((i) => i._id === video._id).length;
    }


    switch (action.type) {

        case "SET_VIDEOS":
            return {
                ...state_data, videos: [...action.payload.videos]
            }

        case "CREATE_NEW_PLAYLIST":
            return {
                ...state_data, playlists: [...state_data.playlists, { _playlistName: action.payload.playlistName, playlistVideos: [] }]
            }



        case "DELETE_PLAYLIST":
            return { ...state_data, playlists: [...state_data.playlists.filter((item) => item._playlistName !== action.payload.playlistName)] }


        case "ADD_TO_PLAYLIST":

            {
                alert(`added to playlist ${action.payload.playlistName}`)
                if (videoIsPresent(action.payload.video, action.payload.playlistName))
                    return { ...state_data }

                return {
                    ...state_data,
                    playlists: state_data.playlists.map((playlist) =>
                        playlist._playlistName === action.payload.playlistName
                            ? { ...playlist, playlistVideos: playlist.playlistVideos.concat(action.payload.video) } : playlist
                    )
                }

            }

        case "DELETE_FROM_PLAYLIST":

            return {
                ...state_data,
                playlists: state_data.playlists.map((playlist) =>
                    playlist._playlistName === action.payload.playlistName
                        ? {
                            ...playlist, playlistVideos: playlist.playlistVideos.filter((i) => i._id !== action.payload.video._id)
                        } : playlist
                )
            }

        case "DEFAULT":
            return { ...state_data };
    }
}