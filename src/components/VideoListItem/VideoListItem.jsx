import React from 'react';
import './videoListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const VideoListItem = () => {
    return (
        <>
            <div className="card__video__listItem flex a-item-center mt-1">
                <div className="image__videoListItem">
                    <img src="https://i.ytimg.com/vi/UVA8pPxOPk4/maxresdefault.jpg" alt="imageListCard" />
                </div>

                <div className="video__listItem_title pl-2">
                    The Most Important Movie I've Ever Made
                </div>
                <div className="container__listItem__button">
                    <button><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
        </>
    )
}

export default VideoListItem;