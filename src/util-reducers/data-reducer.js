import { presentInWatchLater } from "../util-functions/presentInWatchLater";


export function DataReducer(state_data, action) {

    switch (action.type) {

        case "SET_VIDEOS":
            return {
                ...state_data, videos: [...action.payload.videos]
            }

        case "ADD_TO_HISTORY":
            {
                return {
                    ...state_data, history: [...state_data.history, { ...action.payload.video, timeStamp: Date.now() }]
                }
            }

        case "REMOVE_FROM_HISTORY": {
            console.log(state_data.history);
            return {
                ...state_data, history: state_data.history.filter((item) => item.timeStamp !== action.payload.video.timeStamp)
            }
        }

        case "DELETE_HISTORY":
            {
                alert("History Deleted");

                return {
                    ...state_data, history: []
                }
            }

        case "ADD_TO_WATCHLATER":
            {
                console.log(state_data.watchLater);

                if (presentInWatchLater(state_data.watchLater, action.payload.video)) {
                    return {
                        ...state_data, watchLater: [...state_data.watchLater.filter((item) => item._id !== action.payload.video._id)]
                    }
                } else

                    return {
                        ...state_data, watchLater: [...state_data.watchLater, action.payload.video]
                    }
            }

        case "REMOVE_FROM_WATCHLATER":
            {
                return {
                    ...state_data, watchLater: [...state_data.watchLater.filter((item) => item._id !== action.payload.video._id)]
                }
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