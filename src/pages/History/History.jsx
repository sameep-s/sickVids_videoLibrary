import React from 'react';
import "./history.css";
import { Navbar, Sidebar, VideoListItem } from '../../components';
import { useData } from '../../util-context';


const History = () => {

    const { state_data, dispatch_data } = useData();

    const historyList = [...state_data.history];

    console.log(`hlist`, historyList);


    return (
        <>
            <Navbar />

            <div className="main__videoListArea flex">
                <Sidebar />

                <div className="container__videoList__videos flex jc-center  p-2 ">
                    <div className="wrapper__videoList ">
                        <div className="container__videoList_heading flex a-item-center">
                            History <span ><button onClick={() => dispatch_data({ type: "DELETE_HISTORY" })}>Clear History</button></span>
                        </div>

                        {historyList?.length === 0 ?

                            <h1>Nothing here!! Go Watch Something</h1>

                            :

                            historyList.map((video) => <VideoListItem key={video.timeStamp} {...video} actionType={"REMOVE_FROM_HISTORY"} />)}
                    </div>
                </div>

            </div>
        </>
    )
}

export default History;