import React, { useState, useEffect } from 'react';
import './videolisting.css';

import { Navbar, Sidebar, CardVideoList } from '../../components';
import axios from 'axios';



const VideoListing = () => {

    const [videoData, setVideoData] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const dataResponse = await axios.get('/api/videos');
                setVideoData(dataResponse.data.videos);
            }
            catch (e) {
                console.log(e);
            }

        })();


    }, []);


    return (
        <>
            <Navbar />
            <div className="container__main__videoListing  flex">

                <Sidebar />

                <main className='container__main_videoArea flex p-4' >
                    {videoData.map((video) => <CardVideoList key={video._id} {...video} />)}
                </main>
            </div >


        </>
    );
}

export default VideoListing;