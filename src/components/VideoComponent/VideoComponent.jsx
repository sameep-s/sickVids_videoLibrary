import React, { useState } from 'react';
import './videoComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faClock, faListSquares } from '@fortawesome/free-solid-svg-icons';
import { ModalPlaylist } from '../';

const VideoComponent = (video) => {

    const [modalPlaylistOpen, setModalPlaylistOpen] = useState(false);

    const { _id, title, source, views, disliked, liked, description, likes } = video;


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
                            <button><FontAwesomeIcon icon={faThumbsUp} className={liked ? "videoLiked" : ""} /> {likes}</button>
                            <button><FontAwesomeIcon icon={faThumbsDown} className={disliked ? "videoDisliked" : ""} /> DISLIKE</button>
                            <button onClick={() => setModalPlaylistOpen(true)}><FontAwesomeIcon icon={faClock} /> Add To Playlist</button>
                            <button><FontAwesomeIcon icon={faListSquares} /> Watch Later</button>
                        </div>
                    </div>

                    <div className="videoFrame_desc mt-1 pb-2 mb-2 ">
                        {description}
                    </div>
                </div>

                {modalPlaylistOpen && <ModalPlaylist {...{ video, setModalPlaylistOpen }} />}

            </div>
        </>
    )
}

export default VideoComponent;