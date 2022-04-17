import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { ModalPlaylist } from "../";
import { useAuth, useData } from '../../util-context';
import "./cardVideoList.css";
import { presentInWatchLater } from "../../util-functions/presentInWatchLater";

const CardVideoList = (video) => {

    const { user } = useAuth()
    const navigate = useNavigate();
    const { state_data, dispatch_data } = useData();
    const [isInWatchLater, setIsInWatchLater] = useState(false)
    const [modalPlaylistOpen, setModalPlaylistOpen] = useState(false);
    const { _id, title, thumbnail, likes, category } = { ...video };


    function addToHistoryHandler() {
        user ?
            dispatch_data({ type: "ADD_TO_HISTORY", payload: { video: video } })
            :
            navigate('/login', { replace: true })
    }

    function addToWatchLaterHandler() {
        user ?
            dispatch_data({ type: "ADD_TO_WATCHLATER", payload: { video: video } })
            :
            navigate('/login', { replace: true })
    }

    return (
        <>
            <div className="container__card__videoListing m-1">
                <Link to={`/videoPage/${_id}`}>
                    <img src={thumbnail} alt="thumbnail" onClick={addToHistoryHandler} />
                </Link>
                <div className="card__videoListing__content">
                    <div className="card__videoListing_title flex mt-1">{title}</div>
                    <div className="card__videoListing__info mt-1">
                        <span>{likes} likes </span>
                        <span>{category}</span>
                    </div>

                    <div className="card__videoListing__buttonContainer ">
                        <button
                            className='videoList__card__btn'
                            onClick={addToWatchLaterHandler}>
                            {presentInWatchLater(state_data.watchLater, video) ? "Remove From Watch Later" : "Add To Watch Later"}
                        </button>
                        <button className='videoList__card__btn' onClick={() => setModalPlaylistOpen(true)}>Add To Playlist</button>
                    </div>
                </div>

                {modalPlaylistOpen && <ModalPlaylist {...{ video, setModalPlaylistOpen }} />}
            </div>
        </>
    )
}

export default CardVideoList;