import React from 'react';
import "./playlistItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useData } from '../../util-context';

const PlaylistItem = (playlist) => {

    const { dispatch_data } = useData();

    const { _playlistName } = playlist;

    return (
        <>

            <div className="item__playlist mr-2 mt-2 flex a-item-center">
                <div className="playlistName">
                    {_playlistName} ({playlist.playlistVideos.length})
                </div>
                <div className="playlist__deleteIcon">
                    <FontAwesomeIcon onClick={() => dispatch_data({ type: "DELETE_PLAYLIST", payload: { playlistName: _playlistName } })} icon={faTrashCan} />
                </div>
            </div>

        </>
    )
}

export default PlaylistItem;