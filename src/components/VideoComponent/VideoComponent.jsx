import React from 'react';
import './videoComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faClock, faListSquares } from '@fortawesome/free-solid-svg-icons';

const VideoComponent = (video) => {

    const { _id, title, source, views, dislike, liked, description, likes } = video;

    return (
        <>
            <div className="container__video mb-2 mr-4">

                <div className="videoFrame">
                    <iframe width="100%" src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowFullScreen="allowFullScreen"></iframe>,

                </div>

                <div className="container__video__content">
                    <div className="videoFrame__title mt-1">{title}</div>
                    <div className="videoFrame__info mt-1 pb-2 flex a-item-center">
                        <div className="videoFrame__info__inner1">
                            <span>{views} views </span>
                        </div>
                        <div className="videoFrame__info__inner2">
                            <button><FontAwesomeIcon icon={faThumbsUp} className={false ? "videoLiked" : ""} /> 666</button>
                            <button><FontAwesomeIcon icon={faThumbsDown} className={false ? "videoDisliked" : ""} /> DISLIKE</button>
                            <button><FontAwesomeIcon icon={faClock} /> Add To Playlist</button>
                            <button><FontAwesomeIcon icon={faListSquares} /> Watch Later</button>
                        </div>
                    </div>

                    <div className="videoFrame_desc mt-1 pb-2 mb-2 ">
                        {description}
                    </div>
                </div>

            </div>
        </>
    )
}

export default VideoComponent;