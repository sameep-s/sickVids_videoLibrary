import React from 'react';
import { useData } from '../../util-context';
import "./cardVideoList.css";

const CardVideoList = (video) => {

    const { dispatch_data } = useData();

    const { title, thumbnail, likes, category } = { ...video };

    function addToPlaylistHandler() {
        dispatch_data({ type: "DELETE_FROM_PLAYLIST", payload: { video: { ...video }, playlistName: "playlist1" } })
    }

    return (
        <>
            <div className="container__card__videoListing m-1">
                <img src={thumbnail} alt="thumbnail" />
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