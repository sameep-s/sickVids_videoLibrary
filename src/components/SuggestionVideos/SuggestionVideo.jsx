import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../util-context';
import "./suggestionVideo.css";

const SuggestionVideo = (video) => {

    const { _id, title, thumbnail, views, channelName } = video;

    const { dispatch_data } = useData();

    return (
        <>
            <Link to={`/videoPage/${_id}`}>
                <div className="container__suggestionVideo flex mb-2">
                    <div className="container__image__suggestionVideo">
                        <img
                            src={thumbnail}
                            alt="suggestionVideoThumbnail"
                            onClick={() => { dispatch_data({ type: "ADD_TO_HISTORY", payload: { video: video } }) }}
                        />
                    </div>

                    <div className="suggestionVideo__content">
                        <div className="suggestionVideo__title flex ml-1">
                            {title}
                        </div>

                        <div className="suggestionVideo__info pl-1">
                            <div className="suggestionVideo__info__creator ">
                                {channelName}
                            </div>
                            <div className="suggestionVideo__info__views">
                                {views} views
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default SuggestionVideo;