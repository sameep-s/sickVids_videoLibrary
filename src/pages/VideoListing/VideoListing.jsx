import React from 'react';
import './videolisting.css';

import { Navbar, Sidebar, CardVideoList } from '../../components';
import { useData } from '../../util-context';



const VideoListing = () => {


    const { state_data } = useData();

    console.log(state_data.videos);
    const videoData = [...state_data.videos]


    return (
        <>
            <div className="main__wrapper pos-rel">

                <Navbar />
                <div className="container__main__videoListing  flex">

                    <Sidebar />

                    {videoData?.length === 0 ? <h1 className='m-4'>Loading...</h1>
                        :

                        <main className='container__main_videoArea flex p-4' >
                            {videoData.map((video) => <CardVideoList key={video._id} {...video} />)}
                        </main>

                    }

                    <div className="container__overlay pos-fix flex a-item-center jc-center">
                        <div className="container__addToPlaylist">
                            <div className="addToPlaylist__heading">
                                Add To Playlist
                            </div>
                            <div className="playlistArea ">

                            </div>
                            <div className="addToPlaylist__button flex p-2">
                                <button>CLOSE</button>
                            </div>
                        </div>
                    </div>
                </div >

            </div>


        </>
    );
}

export default VideoListing;