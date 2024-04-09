import React from "react";
import { Link } from "react-router-dom";
import noimage from '/download.jpeg'

function Cards({ data, title }) {
  return (
    <div className="flex  flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type||title}/details/${c.id}`} className="w-[25vh] relative mr-[5%] mb-[5%]" key={i}>
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={c.backdrop_path || c.poster_path || c.profile_path?`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.poster_path || c.profile_path
            }`:noimage}
            alt=""
          />
          <h1 className="text-xl text-zinc-300 font-semibold mt-3">
            {c.original_name || c.name || c.title || c.original_title}
          </h1> 
          {c.vote_average&&<div className="absolute bottom-[30%] right-[-10%]  bg-yellow-600 rounded-full text-l font-semibold text-white w-[6vh] h-[6vh] mt-2 flex justify-center items-center  ">
            {(c.vote_average * 10).toFixed()}
            <sup>%</sup>
          </div>  }
          
        </Link>
      ))}
    </div>
  );
}

export default Cards;
