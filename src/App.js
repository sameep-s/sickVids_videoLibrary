import "./App.css";
import Mockman from 'mockman-js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "./components";
import {
  LandingPage,
  VideoListing,
  VideoPage,
  WatchLater,
  PlaylistPage,
  LikedVIdeos,
  History,
  PlaylistVideo

} from './pages';


function App() {

  console.log(localStorage.getItem('token'));
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='mock' element={<Mockman />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path="/videoListing" element={<VideoListing />} />
        <Route path="/videoPage" element={<VideoPage />} />
        <Route path="/videoPage/:videoId" element={<VideoPage />} />


        {/* Private Routes */}
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/playlists" element={<PlaylistPage />} />
        <Route path="/playlistVideo/:playlistName" element={<PlaylistVideo />} />
        <Route path="/history" element={<History />} />
        <Route path="/likedVideos" element={<LikedVIdeos />} />
      </Routes>
      <div className="App" />
    </BrowserRouter>
  );
}

export default App;
