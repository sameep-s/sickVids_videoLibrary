import React from 'react';
import "./suggestionVideo.css";

const SuggestionVideo = () => {
    return (
        <>
            <div className="container__suggestionVideos">

                <div className="container__suggestionVideo flex mb-2">
                    <div className="container__image__suggestionVideo">
                        <img src="https://i.ytimg.com/vi/hPJ762sAptY/maxresdefault.jpg" alt="suggestionVideoThumbnail" />
                    </div>

                    <div className="suggestionVideo__content">
                        <div className="suggestionVideo__title flex ml-1">
                            THE BEST 'SUHAGRAAT' VLOG EVER | LAKSHAY CHAUDHARY
                        </div>

                        <div className="suggestionVideo__info pl-1">
                            <div className="suggestionVideo__info__creator ">
                                Lakshay Choudhary
                            </div>
                            <div className="suggestionVideo__info__views">
                                666 views
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuggestionVideo;