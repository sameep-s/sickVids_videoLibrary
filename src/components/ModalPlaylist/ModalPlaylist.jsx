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
        if (playlists.filter((item) => item._playlistName === playlistName).length === 1) {
            setPlaylistName("");
            alert("playlist with this name already exists, try a different name");
            return
        }

        dispatch_data({ type: "CREATE_AND_ADD_TO_PLAYLIST", payload: { playlistName: playlistName, video: video } })

        alert("playlist Created Sussessfully");
        alert(`added to playlist ${playlistName}`);
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
                    <div className="create__and__addToPlaylist__form flex a-item-center pl-1 pr-1">

                        <form className='flex a-item-center ' onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                name='createAndAddToPlaylist'
                                autoComplete='off'
                                placeholder='Add playlist Name then press enter'
                                value={playlistName}
                                onChange={(e) => setPlaylistName(e.target.value)}
                                id='createAndAddToPlaylist'
                                className='input-txt'
                            />

                            <button onClick={createPlaylistAndAddHandler} className='button__addToPLaylist btn btn-danger '>
                                +
                            </button>
                        </form>

                    </div>
                    <div className="playlistArea ">
                        {playlists?.map((playlist) => <Checkbox key={playlist._playlistName} {...{ video, playlist }} />)}
                    </div>
                    <div className="addToPlaylist__button flex p-2">
                        <button className='btn btn-danger' onClick={() => setModalPlaylistOpen(false)}>CLOSE</button>
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