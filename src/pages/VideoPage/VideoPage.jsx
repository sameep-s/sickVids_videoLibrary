import React from 'react';
import "./videoPage.css";
import { Navbar, SuggestionVideo, VideoComponent } from '../../components';
import { useData } from '../../util-context';
import { useParams } from 'react-router-dom';


const VideoPage = () => {

    function getVideoInfo(id) {
        return state_data.videos.find((video) => video._id === id);
    }

    const { videoId } = useParams();

    const { state_data } = useData();
    const videos = [...state_data.videos];
    const video = getVideoInfo(videoId);



    console.log(state_data.videos);
    console.log(video);



    return (
        <>
            <Navbar />
            <div className="container__main_videoPage flex jc-center mt-2" >
                <div className="wrapper__videoPage flex">

                    <VideoComponent {...video} />

                    <div className="container__suggestionVideos flex">
                        {videos.map((video) => <SuggestionVideo key={video._id} {...video} />)}
                    </div>


                </div>
            </div>
        </>
    )
}

export default VideoPage;