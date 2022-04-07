import React from 'react';
import './videoListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const VideoListItem = () => {
    return (
        <>
            <div className="card__video__listItem flex a-item-center mt-1">
                <Link to={'/videoPage'}>
                    <div className="image__videoListItem">
                        <img src="https://i.ytimg.com/vi/UVA8pPxOPk4/maxresdefault.jpg" alt="imageListCard" />
                    </div>
                </Link>
                <Link to={'/videoPage'}>

                    <div className="video__listItem_title pl-2">
                        The Most Important Movie I've Ever Made
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