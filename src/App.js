import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, VideoListing } from './pages';


function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/videoListing" element={<VideoListing />} />
      </Routes>


      <div className="App" />

    </BrowserRouter>


  );
}

export default App;
