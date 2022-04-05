import React from 'react';
import './videolisting.css';

import { Navbar, Sidebar } from '../../components';



const VideoListing = () => {
    return (
        <>
            <Navbar />
            <div className="container__main__videoListing  flex">

                <Sidebar />

                <main className='container__main_videoArea p-4' >
                    <div className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum at, quod in harum excepturi, officiis quasi accusamus eveniet blanditiis officia consequatur dolores! Beatae tempore laborum autem perferendis quaerat neque eligendi.
                    </div>
                </main>
            </div >


        </>
    );
}

export default VideoListing;