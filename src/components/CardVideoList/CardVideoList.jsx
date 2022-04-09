import React, { useState } from 'react';
import "./cardVideoList.css";
import { ModalPlaylist } from "../";
import { Link } from 'react-router-dom';
import { useData } from '../../util-context';

const CardVideoList = (video) => {

    const [modalPlaylistOpen, setModalPlaylistOpen] = useState(false);
    const { _id, title, thumbnail, likes, category } = { ...video };


    return (
        <>
            <div className="container__card__videoListing m-1">
                <Link to={`/videoPage/${_id}`}>
                    <img src={thumbnail} alt="thumbnail" />
                </Link>
                <div className="card__videoListing__content">
                    <div className="card__videoListing_title flex mt-1">{title}</div>
                    <div className="card__videoListing__info mt-1">
                        <span>{likes} likes </span>
                        <span>{category}</span>
                    </div>

                    <div className="card__videoListing__buttonContainer ">
                        <button className='videoList__card__btn' >Add To Watch Later</button>
                        <button className='videoList__card__btn' onClick={() => setModalPlaylistOpen(true)}>Add To Playlist</button>
                    </div>
                </div>

                {modalPlaylistOpen && <ModalPlaylist {...{ video, setModalPlaylistOpen }} />}
            </div>
        </>
    )
}

export default CardVideoList;