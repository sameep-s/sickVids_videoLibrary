import React from 'react';
import './likedVideos.css';
import { Navbar, Sidebar, VideoListItem } from '../../components';



const LikedVIdeos = () => {
    return (
        <>
            <Navbar />

            <div className="main__videoListArea flex">
                <Sidebar />

                <div className="container__videoList__videos flex jc-center  p-2 ">
                    <div className="wrapper__videoList ">
                        <div className="container__videoList_heading">
                            Liked Videos
                        </div>

                        <VideoListItem />

                    </div>
                </div>

            </div>
        </>
    )
}

export default LikedVIdeos;