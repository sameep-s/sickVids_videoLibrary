import React, { useState } from 'react';
import './playlistPage.css';
import { Navbar, Sidebar } from '../../components';
import { useData } from '../../util-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



const PlaylistPage = () => {

    const [playlistName, setPlaylistName] = useState('');


    const { state_data } = useData();
    console.log(state_data.playlists);

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
                            <form action="#" >
                                <input
                                    type="text"
                                    name="playlistName"
                                    placeholder='Add a name to create playlist.'
                                    onChange={(e) => setPlaylistName(e.target.value)}
                                    id="pname" className='mr-2'
                                />
                                <button onClick={'#'}>Add Playlist</button>
                            </form>
                        </div>
                        <div className="container__playlists flex mt-2">

                            <div className="item__playlist flex a-item-center">
                                <div className="playlistName">
                                    PlaylistName 1
                                </div>
                                <div className="playlist__deleteIcon">
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PlaylistPage;