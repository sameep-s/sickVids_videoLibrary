import React from 'react';
import "./videoPage.css";
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faClock, faListSquares } from '@fortawesome/free-solid-svg-icons';

const VideoPage = () => {
    return (
        <>
            <Navbar />
            <div className="container__main_videoPage flex jc-center mt-4" >
                <div className="wrapper__videoPage flex">
                    <div className="container__video mb-2 mr-4">

                        <div className="videoFrame">
                            <iframe width="100%" src="https://www.youtube.com/embed/5m92gF0MFls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
                        </div>

                        <div className="container__video__content">
                            <div className="videoFrame__title mt-1">VEGETA goes Super Saiyan God for the 1st Time (4 vegeta fans) eng dub</div>
                            <div className="videoFrame__info mt-1 pb-2 flex a-item-center">
                                <div className="videoFrame__info__inner1">
                                    <span>6666 views </span>
                                </div>
                                <div className="videoFrame__info__inner2">
                                    <button><FontAwesomeIcon icon={faThumbsUp} className={false ? "videoLiked" : ""} /> 666</button>
                                    <button><FontAwesomeIcon icon={faThumbsDown} className={false ? "videoDisliked" : ""} /> DISLIKE</button>
                                    <button><FontAwesomeIcon icon={faClock} /> Add To Playlist</button>
                                    <button><FontAwesomeIcon icon={faListSquares} /> Watch Later</button>
                                </div>
                            </div>

                            <div className="videoFrame_desc mt-1 pb-2 mb-2 ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus obcaecati est, saepe commodi ducimus quidem, voluptas placeat ipsum corporis, vero iste animi debitis suscipit tempore. Harum consequuntur alias quas voluptatum?
                            </div>
                        </div>

                    </div>

                    <div className="container__suggestionVideos">

                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage;