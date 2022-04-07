import React from 'react';
import "./watchLater.css";
import { Navbar, Sidebar, VideoListItem } from '../../components';
import { useData } from '../../util-context';


const WatchLater = () => {
    const { state_data } = useData();
    const watchLaterVideos = [...state_data.watchLater];

    return (
        <>
            <Navbar />

            <div className="main__videoListArea flex">
                <Sidebar />

                <div className="container__videoList__videos flex jc-center  p-2 ">
                    <div className="wrapper__videoList ">
                        <div className="container__videoList_heading">
                            WatchLater
                        </div>

                        {watchLaterVideos?.length === 0 ?
                            <h1 className='p-4'>Hey Nothing in Watch Later</h1> :
                            watchLaterVideos.map((video) => <VideoListItem key={video._id} {...video} actionType="REMOVE_FROM_WATCHLATER" />)
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default WatchLater;