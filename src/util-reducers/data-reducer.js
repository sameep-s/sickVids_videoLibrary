import { presentInWatchLater } from "../util-functions/presentInWatchLater";
import { IsPresentInPlaylist, isVideoPresentInLiked } from "../util-functions";
import toast from "react-hot-toast";

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
            toast.success("Removed From History");

            return {
                ...state_data, history: state_data.history.filter((item) => item.timeStamp !== action.payload.video.timeStamp)
            }
        }

        case "DELETE_HISTORY":
            {
                toast.success("History Deleted");

                return {
                    ...state_data, history: []
                }
            }

        case "ADD_TO_WATCHLATER":
            {

                if (presentInWatchLater(state_data.watchLater, action.payload.video)) {
                    toast.error(`Removed From WatchLater`);

                    return {
                        ...state_data, watchLater: [...state_data.watchLater.filter((item) => item._id !== action.payload.video._id)]
                    }
                } else {

                    toast.success(`Added to WatchLater`);
                    return {
                        ...state_data, watchLater: [...state_data.watchLater, action.payload.video]
                    }
                }
            }

        case "REMOVE_FROM_WATCHLATER":
            {
                toast.error(`Removed From WatchLater`);
                return {
                    ...state_data, watchLater: [...state_data.watchLater.filter((item) => item._id !== action.payload.video._id)]
                }
            }

        case "LIKE_VIDEO":
            return isVideoPresentInLiked(state_data.liked, action.payload.video._id) ?
                {
                    ...state_data, liked: [...state_data.liked, action.payload.video]
                }
                :
                {
                    ...state_data, liked: [...state_data.liked.filter((video) => video._id !== action.payload.video._id)]
                }


        case "DISLIKE_VIDEO":

            return {
                ...state_data, liked: [...state_data.liked.filter((item) => item._id !== action.payload.video._id)]
            }


        case "REMOVE_FROM_LIKED_VIDEOS":
            {
                toast.success(`Removed From Liked Videos`)
                return {
                    ...state_data, liked: [...state_data.liked.filter((item) => item._id !== action.payload.video._id)]
                }
            }


        case "CREATE_NEW_PLAYLIST":
            {
                toast.success("playlist Created Sussessfully");
                return {
                    ...state_data, playlists: [...state_data.playlists, { _playlistName: action.payload.playlistName, playlistVideos: [] }]
                }
            }


        case "DELETE_PLAYLIST":
            {
                toast.error("Playlist Deleted");

                return { ...state_data, playlists: [...state_data.playlists.filter((item) => item._playlistName !== action.payload.playlistName)] }
            }

        case "ADD_TO_PLAYLIST":
            {
                if (IsPresentInPlaylist(state_data, action.payload.video, action.payload.playlistName)) {
                    toast.error(`Removed from playlist ${action.payload.playlistName}`)

                    return {
                        ...state_data,
                        playlists: state_data.playlists.map((playlist) =>
                            playlist._playlistName === action.payload.playlistName
                                ? {
                                    ...playlist, playlistVideos: playlist.playlistVideos.filter((i) => i._id !== action.payload.video._id)
                                } : playlist
                        )
                    }
                }
                else {
                    toast.success(`added to playlist ${action.payload.playlistName}`);
                    return {
                        ...state_data,
                        playlists: state_data.playlists.map((playlist) =>
                            playlist._playlistName === action.payload.playlistName
                                ? { ...playlist, playlistVideos: playlist.playlistVideos.concat(action.payload.video) } : playlist
                        )
                    }
                }
            }


        case "DELETE_FROM_PLAYLIST": {
            toast.error("Removed From Playlist");

            return {
                ...state_data,
                playlists: state_data.playlists.map((playlist) =>
                    playlist._playlistName === action.payload.playlistName
                        ? {
                            ...playlist, playlistVideos: playlist.playlistVideos.filter((i) => i._id !== action.payload.video._id)
                        } : playlist
                )
            }
        }


        case "CREATE_AND_ADD_TO_PLAYLIST": {
            toast.success("playlist Created Sussessfully");
            toast.success(`added to playlist ${action.payload.playlistName}`);

            return {
                ...state_data,
                playlists: [...state_data.playlists, { _playlistName: action.payload.playlistName, playlistVideos: [action.payload.video] }]
            }
        }

        default:
            return { ...state_data };
    }
}