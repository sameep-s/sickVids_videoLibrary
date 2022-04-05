import React from 'react';
import "./cardVideoList.css";

const CardVideoList = ({ title, thumbnail, likes, category }) => {
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
                        <button className='videoList__card__btn'>Add To Playlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardVideoList;