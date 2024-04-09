import React from "react";
import { Link } from "react-router-dom"; 
import noimage from '/download.jpeg'


function HorizontalCards({ data}) { 
  return (
    
     
      <div className="w-[100%] flex  p-5 overflow-y-hidden mb-5">
        {data.length>0?data.map((d, i) => ( 
         
          <Link  to={`/${d.media_type ||`movie` || `tv` || `people`}/details/${d.id}`} key={i} className="min-w-[15%] h-[50vh] bg-zinc-900 mr-5 mb-5"> 
          
            <img
              className="w-full h-[55%] object-cover"
              src={d.backdrop_path || d.poster_path?`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`:noimage}
              alt=""
            /> 
            
            <div className="p-2 mb-2 mt-2 h-[45%] overflow-y-auto">
              <h1 className="text-white font-bold text-lg">
                {d.title || d.name || d.original_name}
              </h1>
              <p className="text-white text-xs  mt-3">
                {d.overview.slice(0, 50)}
                <span className="text-zinc-500 font-semibold">...more</span>
              </p> 
            
            </div>
          </Link> 
          
        )):<h1 className="text-3xl text-white font-black text-center mt-5">Nothing to show</h1>} 
      
      </div>
    
  );
}

export default HorizontalCards;
