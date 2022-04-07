import React from 'react';
import './videoListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const VideoListItem = (video) => {
    const { _id, thumbnail, title, } = { ...video }

    return (
        <>
            <div className="card__video__listItem flex a-item-center mt-1">
                <Link to={`/videoPage/${_id}`}>
                    <div className="image__videoListItem">
                        <img src={thumbnail} alt="imageListCard" />
                    </div>
                </Link>

                <Link to={`/videoPage/${_id}`}>
                    <div className="video__listItem_title pl-2">
                        {title}
                    </div>
                </Link>
                <div className="container__listItem__button">
                    <button><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
        </>
    )
}

export default VideoListItem;