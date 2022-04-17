import React, { useState } from 'react';
import './playlistPage.css';
import { Navbar, Sidebar, PlaylistItem } from '../../components';

import { useData } from '../../util-context';




const PlaylistPage = () => {

    const { state_data, dispatch_data } = useData();
    const [playlistName, setPlaylistName] = useState('');

    function createPlaylistHandler() {
        if (playlistName.length === 0) {
            alert("Length of name Can't be zero")
            return;
        }
        if (state_data.playlists.filter((item) => item._playlistName === playlistName).length === 1) {
            setPlaylistName("");
            alert("playlist with this name already exists, try a different name");
            return
        }

        dispatch_data({ type: "CREATE_NEW_PLAYLIST", payload: { playlistName: playlistName } })
        alert("playlist Created Sussessfully");
        setPlaylistName("");

    }

    const playlists = [...state_data.playlists]

    return (
        <>
            <Navbar />

            <div className="main__videoListArea flex">
                <Sidebar />
                <div className="container__videoList__videos flex jc-center  p-2 ">
                    <div className="wrapper__videoList ">
                        <div className="container__videoList_heading">
                            My Playlists
                        </div>
                        <div className="add_playlist__form flex mt-2">
                            <form onSubmit={(e) =>
                                e.preventDefault()
                            }>
                                <input
                                    type="text"
                                    name="playlistName"
                                    autoComplete='off'
                                    placeholder='Add a name to create playlist.'
                                    value={playlistName}
                                    onChange={(e) => setPlaylistName(e.target.value)}
                                    id="pname"
                                    className='mr-2'
                                />
                                <button type='submit' onClick={createPlaylistHandler}>Add Playlist</button>
                            </form>
                        </div>

                        <div className="container__playlists flex mt-2">
                            {playlists.map((playlist) => <PlaylistItem key={playlist._playlistName} {...playlist} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistPage;