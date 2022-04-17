import React from 'react';
import './videolisting.css';
import { Navbar, Sidebar, CardVideoList } from '../../components';
import { useData } from '../../util-context';

const VideoListing = () => {

    const { state_data } = useData();
    const videoData = [...state_data.videos];
  
    return (
        <>
            <div className="main__wrapper pos-rel">
                <Navbar />
                <div className="container__main__videoListing  flex">
                    <Sidebar />
                    {videoData?.length === 0 ? <h1 className='m-4'>Loading...</h1>
                        :
                        <main className='container__main_videoArea flex p-4' >
                            {videoData.map((video) => <CardVideoList key={video._id} {...video} />)}
                        </main>
                    }
                </div >
            </div>
        </>
    );
}

export default VideoListing;