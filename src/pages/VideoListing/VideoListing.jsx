import React from 'react';
import './videolisting.css';
import { Navbar, Sidebar, CardVideoList } from '../../components';
import { useData } from '../../util-context';



const VideoListing = () => {


    const { state_data } = useData();
    const videoData = [...state_data.videos]


    return (
        <>
            <Navbar />
            <div className="container__main__videoListing  flex">
                <Sidebar />

                {videoData?.length === 0 ? <h1 className='m-4'>No Videos To be Shown.</h1>
                    :
                    <main className='container__main_videoArea flex p-4' >
                        {videoData.map((video) => <CardVideoList key={video._id} {...video} />)}
                    </main>

                }
            </div >
        </>
    );
}

export default VideoListing;