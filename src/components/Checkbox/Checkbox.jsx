import React from 'react';
import { useData } from '../../util-context';
import './checkbox.css';

const Checkbox = ({ playlist, video }) => {

    const { _playlistName } = playlist;
    const { state_data, dispatch_data } = useData();

    function videoIsPresent(video, playlistName) {
        const playlist = state_data.playlists.find((i) => i._playlistName === playlistName);

        return (playlist.playlistVideos.filter((i) => i._id === video._id).length) > 0;
    }


    return (
        <>
            <div className="wrapper__checkbox flex a-item-center mt-1 mb-1">
                <input
                    type="checkbox"
                    id={_playlistName}
                    name={_playlistName}
                    onChange={() => dispatch_data({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: _playlistName } })}
                    checked={videoIsPresent(video, _playlistName)}
                />

                <label htmlFor={_playlistName}>{_playlistName}</label>
            </div>
        </>
    )
}

export default Checkbox;