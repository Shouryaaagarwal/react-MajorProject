import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

function Home() {
  document.title = "Home";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const GetHeader = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log(error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeader();
  }, [category]);
  console.log(trending);
  return wallpaper && trending ? (
    <>
      <Sidenav />

      <div className="w-[80%] h-full overflow-x-hidden overflow-auto ">
        <Topnav />
        <Header data={wallpaper} />
        <div className="p-6  flex justify-between   ">
          <h1 className="text-2xl  text-zinc-500 font-semibold ">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;

// import React from 'react'
// import Sidenav from './partials/Sidenav'
// import Topnav from './partials/Topnav'

// function Home() {
//   return (
//     <>
//     {/* <div className='w-[20%] bg-red-100 '>   </div>  */}
//     <Sidenav/>
//     <div className='w-[80%] bg-red-300'>
//     <Topnav/>
//     </div>
//     </>
//   )
// }

// export default Home
