import React, { useState } from 'react';
import './videolisting.css';
import { Navbar, Sidebar, CardVideoList } from '../../components';
import { useData } from '../../util-context';
import { filterSearchDebounced } from '../../services';
import { filterSearch } from '../../services/filterServices';

const VideoListing = () => {

    const [searchVal, setSearchVal] = useState("")

    const { state_data } = useData();
    const videoData = [...state_data.videos];

    const videoDataFiltered = filterSearchDebounced(videoData, searchVal);
    const videoDataSearch = filterSearch(videoData, searchVal);

    console.log(`vdf`, videoDataFiltered);
    console.log(`vds`, videoDataSearch);


    return (
        <>
            <div className="main__wrapper pos-rel">
                <Navbar {...{ setSearchVal }} search />
                <div className="container__main__videoListing  flex">
                    <Sidebar />
                    {videoDataSearch?.length === 0 || videoDataSearch === undefined ? <h1 className='m-4'>Loading...</h1>
                        :
                        <main className='container__main_videoArea flex p-4' >
                            {videoDataSearch?.map((video) => <CardVideoList key={video._id} {...video} />)}
                        </main>
                    }
                </div >
            </div>
        </>
    );
}

export default VideoListing;