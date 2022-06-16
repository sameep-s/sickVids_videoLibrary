import { createContext, useContext, useReducer, useEffect } from "react";
import { DataReducer } from "../util-reducers/data-reducer";
import axios from 'axios';


const defaultDataContextVal = [{ items: "none" }];

const DataContext = createContext(defaultDataContextVal);

const DataProvider = ({ children }) => {


    useEffect(() => {

        (async () => {
            try {
                const dataResponse = await axios.get('/api/videos');
                const videos = dataResponse.data.videos;
                dispatch_data({ type: "SET_VIDEOS", payload: { videos: videos } })
                console.log(`videos`, videos);

            }
            catch (e) {
                console.log(e);
            }

        })();


    }, []);


    const [state_data, dispatch_data] = useReducer(DataReducer, {
        videos: [],
        liked: [],
        history: [],
        watchLater: [],
        playlists: []
    })



    return (
        <DataContext.Provider value={{ state_data, dispatch_data }}>
            {children}
        </DataContext.Provider>
    );

}

const useData = () => useContext(DataContext);

export { useData, DataProvider };