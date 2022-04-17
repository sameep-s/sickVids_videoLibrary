import axios from "axios";


export const addToLike = (dispatch_data, video, token) => {
    try {
        (async () => {
            const { data: { likes }, } = await axios.post('/api/user/likes',
                {
                    video
                },
                {
                    headers: {
                        authorization: token,
                    }
                });
            likes && dispatch_data({ type: "LIKE_INIT", payload: { likes: likes } })
        })();
    } catch (e) {
        console.error(e);
    }
}


export const removeFromLike = (dispatch_data, id, token) => {
    try {
        (async () => {
            const { data: { likes }, } = await axios.delete(`/api/user/likes/${id}`,
                {
                    headers: {
                        authorization: token,
                    }
                });
            likes && dispatch_data({ type: "LIKE_INIT", payload: { likes: likes } })
        })();
    } catch (e) {
        console.error(e);
    }
}