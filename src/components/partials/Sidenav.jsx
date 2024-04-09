import React, { useEffect } from 'react' 
import { Link } from 'react-router-dom' 

function Sidenav() { 
    
  return (
    <> 
     <div className="SIDENAV  text-white w-[20%] h-full  border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl font-bold ">
          <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
          <span>ShowBOX</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 gap-1">
          <h1 className="tex-white font-semibold text-l mt-10 mb-2">
            {" "}
            New Feeds
          </h1>
          <Link to={"/trending"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-fire-fill mr-2"></i>Trending
          </Link>
          <Link to={"/popular"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-bard-fill mr-2"></i>  Popular
          </Link>
          <Link to={"/movie"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-movie-2-fill mr-2"></i>  Movies
          </Link>
          <Link to={"/tv"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-tv-2-fill mr-2"></i>  TV Shows
          </Link>
          <Link to={"/person"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-group-fill mr-2"></i> People
          </Link>
        </nav> 
        <hr className="mt-5 bg-transparent h-[1px] bg-zinc-400 " /> 
        <nav className="flex flex-col text-zinc-400 ">
          <h1 className="tex-white font-semibold text-l mt-8 mb-2">
            {" "}
         Website Information
          </h1>
          <Link to={"/about"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-folder-info-fill mr-2"></i>About
          </Link>
          <Link to={"/contact"} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-phone-fill mr-2"></i>Contact-Us
          </Link>
          
        </nav>
      </div>
    
    </>
  )
}

export default Sidenav
