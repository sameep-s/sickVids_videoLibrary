import React, { useState } from 'react';
import { useData } from '../../util-context';
import { Checkbox } from '../';
import "./modalPlaylist.css";

const ModalPlaylist = ({ video, setModalPlaylistOpen }) => {

    const [playlistName, setPlaylistName] = useState('');
    const { state_data, dispatch_data } = useData();

    const playlists = [...state_data.playlists];

    function createPlaylistAndAddHandler() {
        if (playlistName.length === 0) {
            alert("Length of name Can't be zero")
            return;
        }
        if (state_data.playlists.filter((item) => item._playlistName === playlistName).length === 1) {
            setPlaylistName("");
            alert("playlist with this name already exists, try a different name");
            return
        }

        dispatch_data({ type: "CREATE_AND_ADD_TO_PLAYLIST", payload: { playlistName: playlistName, video: video } })
        alert("playlist Created Sussessfully");
        setPlaylistName("");
        setModalPlaylistOpen(false);
    }


    return (
        <>
            <div
                className="container__overlay pos-fix flex a-item-center jc-center"
            >

                <div className="container__addToPlaylist pos-fix">
                    <div className="addToPlaylist__heading">
                        Add To Playlist
                    </div>
                    <div className="create__and__addToPlaylist__form flex pl-1 pr-1">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <input
                                type="text"
                                id='createAndAddToPlaylist'
                                name='createAndAddToPlaylist'
                                onChange={(e) => setPlaylistName(e.target.value)}
                                autoComplete='off'
                                placeholder='Add playlist Name then press enter'
                            />
                            <button type='submit' onSubmit={createPlaylistAndAddHandler} className='button__addToPLaylist'>+</button>
                        </form>
                    </div>
                    <div className="playlistArea ">
                        {playlists?.map((playlist) => <Checkbox key={playlist._playlistName} {...{ video, playlist }} />)}
                    </div>
                    <div className="addToPlaylist__button flex p-2">
                        <button onClick={() => setModalPlaylistOpen(false)}>CLOSE</button>
                    </div>
                </div>

                <div
                    className="container__invisible__overlay"
                    onClick={() => setModalPlaylistOpen(false)}
                ></div>
            </div>
        </>
    )
}

export default ModalPlaylist;