import axios from "axios";


export const addToWatchLater = (dispatch_data, video, token) => {
    try {
        (async () => {
            const { data: { watchLater } } = await axios.post('api/user/watchLater',
                { video, },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );

            watchLater && dispatch_data({ type: "WATCH_LATER_INIT", payload: { watchLater: watchLater } })
        })();
    }
    catch (e) {
        console.error(e);
    }
}



export const removeFromWatchLater = (dispatch_data, id, token) => {
    try {
        (async () => {
            const { data: { watchLater } } = await axios.delete(`api/user/watchLater/${id}`,
                {
                    headers: {
                        authorization: token,
                    },
                }
            );

            watchLater && dispatch_data({ type: "WATCH_LATER_INIT", payload: { watchLater: watchLater } })
        })();
    }
    catch (e) {
        console.error(e);
    }
}


export const clearWatchLater = (dispatch_data, token) => {
    try {
        (async () => {
            const { data: { watchLater } } = await axios.delete(`api/user/watchLater/all`,
                {
                    headers: {
                        authorization: token,
                    },
                }
            );

            watchLater && dispatch_data({ type: "WATCH_LATER_INIT", payload: { watchLater: watchLater } })
        })();
    }
    catch (e) {
        console.error(e);
    }
}