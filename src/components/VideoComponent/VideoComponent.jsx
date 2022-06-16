import React, { useState, useEffect } from 'react';
import './videoComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faClock, faListSquares, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ModalPlaylist } from '../';
import { useAuth, useData } from '../../util-context';
import { presentInWatchLater, isVideoPresentInLiked } from "../../util-functions/";
import { Navigate, useNavigate } from 'react-router-dom';


const VideoComponent = (video) => {
    const { _id, title, source, views, disliked, liked, description, likes } = video;

    const { user } = useAuth();
    const navigate = useNavigate();

    const { state_data, dispatch_data } = useData();
    const [modalPlaylistOpen, setModalPlaylistOpen] = useState(false);
    const [videoLikes, setVideoLikes] = useState(0);

    useEffect(() => {
        setVideoLikes(likes);

    }, [likes]);


    const isLiked = isVideoPresentInLiked(state_data.liked, _id);

    function addToWatchLaterHandler() {
        user ?
            dispatch_data({ type: "ADD_TO_WATCHLATER", payload: { video: video } })
            :
            navigate('/login', { replace: true })
    }

    function addToLikeHandler() {
        if (!user) navigate('/login', { replace: true })

        else {
            dispatch_data({ type: "LIKE_VIDEO", payload: { video: video } })
            isLiked ? setVideoLikes(videoLikes - 1) : setVideoLikes(videoLikes + 1);
        }
    }

    function dislikeHandler() {

        if (!user) navigate('/login', { replace: true })

        else {
            dispatch_data({ type: "DISLIKE_VIDEO", payload: { video: video } })
            isLiked && setVideoLikes(videoLikes - 1);
        }
    }

    function addToPLaylistHandler() {
        user ?
            setModalPlaylistOpen(true)
            :
            navigate('/login', { replace: true })

    }


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
                            <button onClick={addToLikeHandler}><FontAwesomeIcon icon={faThumbsUp} style={isLiked ? { color: "var(--primary)" } : ""} /> {videoLikes} </button>

                            <button onClick={dislikeHandler}><FontAwesomeIcon icon={faThumbsDown} /> DISLIKE</button>
                            <button onClick={addToPLaylistHandler}><FontAwesomeIcon icon={faClock} /> Add To Playlist</button>
                            <button onClick={addToWatchLaterHandler}> <FontAwesomeIcon icon={presentInWatchLater(state_data.watchLater, video) ? faCheck : faListSquares} className=" pr-1" />Watch Later</button>
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