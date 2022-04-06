import React from 'react';
import "./videoPage.css";
import { Navbar, SuggestionVideo, VideoComponent } from '../../components';


const VideoPage = () => {
    return (
        <>
            <Navbar />
            <div className="container__main_videoPage flex jc-center mt-2" >
                <div className="wrapper__videoPage flex">

                    <VideoComponent />

                    <SuggestionVideo />

                </div>
            </div>
        </>
    )
}

export default VideoPage;