import React from 'react';
import { useData } from '../../util-context';
import { IsPresentInPlaylist } from '../../util-functions';
import './checkbox.css';

const Checkbox = ({ playlist, video }) => {

    const { _playlistName } = playlist;
    const { dispatch_data } = useData();

    return (
        <>
            <div className="wrapper__checkbox flex a-item-center mt-1 mb-1">
                <input
                    type="checkbox"
                    id={_playlistName}
                    name={_playlistName}
                    onChange={() => dispatch_data({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: _playlistName } })}
                    checked={() => IsPresentInPlaylist(video, _playlistName)}
                />

                <label htmlFor={_playlistName}>{_playlistName}</label>
            </div>
        </>
    )
}

export default Checkbox;