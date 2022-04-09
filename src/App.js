import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  VideoListing,
  VideoPage,
  WatchLater,
  PlaylistPage,
  LikedVIdeos,
  History,
  PlaylistVideo,
  Error404

} from './pages';


function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/videoListing" element={<VideoListing />} />
        <Route path="/videoPage" element={<VideoPage />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/playlists" element={<PlaylistPage />} />
        <Route path="/playlistVideo/:playlistName" element={<PlaylistVideo />} />
        <Route path="/history" element={<History />} />
        <Route path="/likedVideos" element={<LikedVIdeos />} />
        <Route path="/videoPage/:videoId" element={<VideoPage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>


      <div className="App" />

    </BrowserRouter>


  );
}

export default App;
