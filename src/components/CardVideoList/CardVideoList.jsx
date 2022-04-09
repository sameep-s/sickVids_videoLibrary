import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../util-context';
import "./cardVideoList.css";

const CardVideoList = (video) => {

    const { dispatch_data } = useData();

    const { _id, title, thumbnail, likes, category } = { ...video };

    function addToPlaylistHandler() {
        dispatch_data({ type: "DELETE_FROM_PLAYLIST", payload: { video: { ...video }, playlistName: "playlist1" } })
    }

    return (
        <>
            <div className="container__card__videoListing m-1">
                <Link to={`/videoPage/${_id}`}>
                    <img
                        className='image__card__videoList'
                        src={thumbnail}
                        alt="thumbnail" />
                </Link>
                <div className="card__videoListing__content">
                    <div className="card__videoListing_title flex mt-1">{title}</div>
                    <div className="card__videoListing__info mt-1">
                        <span>{likes} likes </span>
                        <span>{category}</span>
                    </div>

                    <div className="card__videoListing__buttonContainer ">
                        <button className='videoList__card__btn' >Add To Watch Later</button>
                        <button className='videoList__card__btn' onClick={addToPlaylistHandler}>Add To Playlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardVideoList;