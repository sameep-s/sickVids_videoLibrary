import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faListSquares, faThumbsUp, faHistory, faClock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const linkStyleSidebar = ({ isActive }) => ({
        fontWeight: isActive ? "bolder" : "",
        backgroundColor: isActive ? "var(--danger-shade)" : "",
        color: isActive ? "red" : "",
    })

    return (
        <>
            <aside className='container__main__sidebar pos-stick '>
                <div className="container__inner_siderbar  pt-2">
                    <ul>
                        <NavLink to={"/videoListing"} style={linkStyleSidebar}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faHouse} /> <span className='ml-2'>Home</span></li>
                        </NavLink>

                        <NavLink to={"/playlists"} style={linkStyleSidebar}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faListSquares} /> <span className='ml-2'>Playlists</span></li>
                        </NavLink>

                        <NavLink to={"/likedVideos"} style={linkStyleSidebar}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faThumbsUp} /> <span className='ml-2'>Liked</span></li>
                        </NavLink>

                        <NavLink to={"/watchlater"} style={linkStyleSidebar}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faClock} /> <span className='ml-2'>Watch Later</span></li>
                        </NavLink>

                        <NavLink to={"/history"} style={linkStyleSidebar}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faHistory} /> <span className='ml-2'>History</span></li>
                        </NavLink>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;