import axios from "axios";


export const addToHistory = (dispatch_data, video, token) => {
    try {

        (async () => {
            const { data: { history } } = await axios.post('api/user/history',
                {
                    video,
                },
                {
                    headers: {
                        authorization: token,
                    }
                });
            history && dispatch_data({ type: "HISTORY_INIT", payload: { history: history } });
        })();


    } catch (e) {
        console.error(e);
    }
}


export const removeFromHistory = (dispatch_data, id, token) => {
    try {

        (async () => {
            const { data: { history } } = await axios.delete(`api/user/history/${id}`,
                {
                    headers: {
                        authorization: token,
                    }
                });
            history && dispatch_data({ type: "HISTORY_INIT", payload: { history: history } });
        })();


    } catch (e) {
        console.error(e);
    }
}


export const clearHistory = (dispatch_data, token) => {
    try {
        (async () => {
            const { data: { history } } = await axios.delete('/api/user/history/all', {
                headers: {
                    authorization: token
                }
            });
            history && dispatch_data({ type: "HISTORY_INIT", payload: { history: history } });
        })();
    } catch (e) {
        console.error(e)
    }
};