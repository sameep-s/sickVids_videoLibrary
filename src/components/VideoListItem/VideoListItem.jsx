import React from 'react';
import './videoListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useData } from '../../util-context';

const VideoListItem = (video) => {

    const { _id, thumbnail, title, actionType, playlistName } = video;
    const { dispatch_data } = useData();

    return (
        <>
            <div className="card__video__listItem flex a-item-center mt-1">
                <Link to={`/videoPage/${_id}`}>
                    <div className="image__wrapper__videoListItem">
                        <img src={thumbnail}
                            className="image__videoListItem"
                            alt="imageListCard"
                            onClick={() => { dispatch_data({ type: "ADD_TO_HISTORY", payload: { video: video, timeStamp: Date.now() } }) }}
                        />
                    </div>
                </Link>

                <Link to={`/videoPage/${_id}`}>
                    <div className="video__listItem_title pl-2">
                        {title}
                    </div>
                </Link>

                <div className="container__listItem__button">
                    <button onClick={() => playlistName ? dispatch_data({ type: actionType, payload: { video: video, playlistName: playlistName } })
                        :
                        dispatch_data({ type: actionType, payload: { video: video, } })}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>

            </div>
        </>
    )
}

export default VideoListItem;