import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios"; 
import noimage from "/download.jpeg"

function Topnav() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);
  console.log(query);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
      // console.log(data) ;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-[80%] h-[10vh] relative mx-auto flex items-center">
      <i className="text-zinc-400 text-2xl ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] bg-transparent text-zinc-200 mx-8 p-3 text-lg  outline-none "
        type="text"
        placeholder="search anything "
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className=" text-zinc-400 text-2xl ri-close-line"
        ></i>
      )}

      <div className=" z-50 absolute top-[90%] w-[50%] max-h-[50vh] left-[5%] rounded bg-zinc-200 overflow-auto">
        {search.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300  text-zinc-600 font-semibold flex justify-start items-center  w-[100%] p-7 border-b-2 border-zinc-100"
          >
            <img 
            className="w-10[vh] h-[10vh] object-cover rounded mr-3 shadow-lg"
              src={s.backdrop_path || s.profile_path?  
                `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:noimage}
              alt=""
            />
            <span>
              {s.original_name || s.name || s.title || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;

// eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiJjMGI3M2M1N2UzMmYxOGQ5YWQzYzYwMzkwZjdhYzI4OCIsInN1YiI6IjY2MGVjMTE2OWM5N2JkMDE3Y2E4OGZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .qV02wCJ3IzEjwPmjNIvPaLbLpdBXtb0s5tTgH_Hleo0;

// c0b73c57e32f18d9ad3c60390f7ac288
