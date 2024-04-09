import React from "react";
import { Link , useLocation } from "react-router-dom";

function Header({ data }) { 
  const{pathname} = useLocation() ;
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col  justify-end items-start p-[5%]"
    >
      <h1 className="text-4xl w-[70%] font-bold text-white ">
        {" "}
        {data.original_name || data.name || data.title || data.original_title}
      </h1>
      <p className="w-[70%] text-white text-sm  mt-2">
        {data.overview.slice()}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">...more</Link>
      </p> 
      <p className="text-white mt-2 " >
      <i className="ri-megaphone-fill text-yellow-500 mr-1"></i>{data.release_date||"No Information"} 
      <i className="ml-5 ri-album-fill text-yellow-500 mr-1"></i>{data.media_type.toUpperCase( )}
      </p> 
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="text-white bg-[#6556CD] hover:bg-[#401F71] p-3 rounded-lg mt-3">Watch Trailer</Link>
    </div>
  );
}

export default Header;
