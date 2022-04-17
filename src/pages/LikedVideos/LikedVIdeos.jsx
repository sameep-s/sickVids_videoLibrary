import React from 'react';
import './likedVideos.css';
import { Navbar, Sidebar, VideoListItem } from '../../components';
import { useData } from '../../util-context';



const LikedVIdeos = () => {


    const { state_data } = useData();
    const likedVideos = [...state_data.liked];

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

                        {likedVideos.length === 0 ? <h1 className='m-4'>There's Nothing here</h1>
                            :
                            likedVideos.map((video) => <VideoListItem key={video._id} {...video} actionType="REMOVE_FROM_LIKED_VIDEOS" />)
                        }



                    </div>
                </div>

            </div>
        </>
    )
}

export default LikedVIdeos;