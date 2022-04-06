import { createContext, useContext, useReducer } from "react";

const defaultDataContextVal = [items: "none"];

const DataContext = createContext(defaultDataContextVal);

const CartProvider = ({ children }) => {

    function DataReducer(state_data, action) {


        switch (action.type) {
            case "DEFAULT":
                return state_data;
        }
    }

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

export { useData, CartProvider };