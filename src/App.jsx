import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tv from "./components/Tv";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Persondetails from "./components/Persondetails";
import Trailer from "./components/partials/Trailer";
import Notfound from "./components/Notfound";
import Aboutus from "./components/Aboutus";
import ContactPage from "./components/Contact";

function App() {
  return (
    <div className="bg-[#1F1E24]  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route
            path="/movie/details/:id/trailer"
            element={<Trailer />}
          ></Route>
        </Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />}></Route>
        </Route>
        <Route path="/person" element={<People />}></Route>
        <Route path="/person/details/:id" element={<Persondetails />}></Route>
        <Route path="*" element={<Notfound />}></Route> 
        <Route path="/about" element={<Aboutus/>}></Route> 
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
