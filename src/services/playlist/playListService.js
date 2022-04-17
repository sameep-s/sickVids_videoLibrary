import axios from "axios";

export const createNewPlaylist = (dispatch_data, name, token) => {
    try {
        (async () => {
            const { data: { playlists } } = await axios.post('api/user/playlists', {
                playlist: {
                    title: name,
                    description: ""
                },
            },
                {
                    headers: {
                        authorization: token,
                    }
                }

            );
            playlists && dispatch_data({ type: "PLAYLIST_INIT", payload: { playlists: playlists } });
        }
        )();
    }
    catch (e) {
        console.error(e);
    }
}


export const removePlaylist = (dispatch_data, id, token) => {
    try {
        (async () => {
            const { data: { playlists } } = await axios.delete(`api/user/playlists${id}`, {
                headers: {
                    authorization: token,
                }
            });
            playlists && dispatch_data({ type: "PLAYLIST_INIT", payload: { playlists: playlists } });
        }
        )();
    }
    catch (e) {
        console.error(e);
    }
}


export const addToPlaylist = (dispatch_data, video, id, token) => {
    try {

        (async () => {

            const { data: { playlist } } = axios.post(`/api/user/playlists/${id}`,
                {
                    video,
                },
                {
                    headers: {
                        authorization: token
                    }
                }
            );
            playlist && dispatch_data({ type: "PLAYLIST_VIDEO", type: { playlist: playlist } });
        })();

    }
    catch (e) {
        console.error(e)
    }
}


export const removeFromPLaylist = (dispatch_data, id, videoId, token) => {
    try {
        (async () => {
            const { data: { playlist } } = await axios.delete(`/api/user/playlists/${id}/${videoId}`, {
                headers: {
                    authorization: token,
                },
            });
            playlist && dispatch_data({ type: "PLAYLIST_VIDEO", type: { playlist: playlist } });
        })();
    }
    catch (e) {
        console.log(e);
    }
}