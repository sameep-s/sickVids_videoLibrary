import "./App.css";
import Mockman from 'mockman-js';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup } from "./components";
import { RequireAuth } from "./privateRoutes/requireAuth";
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
        <Route path="/watchLater" element={<RequireAuth><WatchLater /></RequireAuth>} />
        <Route path="/playlists" element={<RequireAuth><PlaylistPage /></RequireAuth>} />
        <Route path="/playlistVideo/:playlistName" element={<RequireAuth><PlaylistVideo /></RequireAuth>} />
        <Route path="/history" element={<RequireAuth><History /></RequireAuth>} />
        <Route path="/likedVideos" element={<RequireAuth><LikedVIdeos /></RequireAuth>} />
      </Routes>
      <div className="App" />
    </BrowserRouter>
  );
}

export default App;
