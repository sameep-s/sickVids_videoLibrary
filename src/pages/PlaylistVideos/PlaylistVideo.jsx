import React from 'react';
import './playlistVideo.css';
import { Navbar, Sidebar, VideoListItem } from '../../components';
import { useData } from '../../util-context';
import { useParams } from 'react-router-dom';



const PlaylistVideo = () => {

    const { playlistName } = useParams();
    const { state_data } = useData();

    function getPlaylist(playlists, playlistName) {
        return playlists.find((item) => item._playlistName === playlistName).playlistVideos;
    }

    const playlist = getPlaylist(state_data.playlists, playlistName);


    return (
        <>
            <Navbar />

            <div className="main__videoListArea flex">
                <Sidebar />

                <div className="container__videoList__videos flex jc-center  p-2 ">
                    <div className="wrapper__videoList ">
                        <div className="container__videoList_heading">
                            {playlistName}
                        </div>
                        {playlist.length === 0
                            ? <h1>Nothing Here</h1> :
                            playlist?.map((video) => <VideoListItem key={video._id} {...video} actionType={"DELETE_FROM_PLAYLIST"} playlistName={playlistName} />)
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default PlaylistVideo;