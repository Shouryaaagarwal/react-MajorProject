import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

function Trailer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytname = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-100 bg-[rgba(0,0,0,.9)] ">
      <Link
        onClick={() => navigate(-1)}
        className=" absolute hover:text-[#6556CD]  text-white text-2xl right-[5%] top-[5%] ri-close-fill"
      ></Link> 
      {ytname?<ReactPlayer 
      controls
        height={500}
        width={1200}
        url={`https://www.youtube.com/watch?v=${ytname.key}`} 
      />:<Notfound/>}
      
    </div>
  );
}

export default Trailer;
