import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faListSquares, faThumbsUp, faHistory, faClock } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <>
            <aside className='container__main__sidebar pos-stick '>
                <div className="container__inner_siderbar  pt-2">
                    <ul>
                        <li className='p-1 pl-4 actv'><a href="#"><FontAwesomeIcon icon={faHouse} /> <span className='ml-2'>Home</span></a></li>
                        <li className='p-1 pl-4'><a href="#"><FontAwesomeIcon icon={faListSquares} /> <span className='ml-2'>Playlists</span></a></li>
                        <li className='p-1 pl-4'><a href="#"><FontAwesomeIcon icon={faThumbsUp} /> <span className='ml-2'>Liked</span></a></li>
                        <li className='p-1 pl-4'><a href="#"><FontAwesomeIcon icon={faClock} /> <span className='ml-2'>Watch Later</span></a></li>
                        <li className='p-1 pl-4'><a href="#"><FontAwesomeIcon icon={faHistory} /> <span className='ml-2'>History</span></a></li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;