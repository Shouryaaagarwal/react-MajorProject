import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Aboutus() {
  document.title = "About Us";
  const navigate = useNavigate();

  return (
    <div className="w-full h-full ">
      <Link
        onClick={() => navigate(-1)}
        className=" absolute hover:text-[#6556CD]   text-white text-2xl left-[5%] top-[5%] ri-arrow-left-fill"
      ></Link>
      <div className="text-white p-10 ml-[10%]">
        <h1 className="text-zinc-400 font-bold text-2xl">About Us</h1>
      </div>
      <div className="    text-zinc-400 w-[70vw]  h-[60vh]  shadow-xl shadow-[rgba(255,255,255,.5)] border-2 border-zinc-700 m-auto mt-10">
        {/* {info[category + "Credits"].cast.map((c, i) => (
              <li  key={i} className="hover:text-white duration-300 cursor-pointer p-5 rounded hover:bg-[#19191d]">
                <Link to={`/${category}/details/${c.id}`} className=" ">
                  <span>
                    {" "}
                    {c.original_name ||
                      c.name ||
                      c.title ||
                      c.original_title}
                  </span>
                  <span className="block ml-5 mt-3"> 
                 Character Name: {c.character&&`${c.character
                      }`}
                  </span>
                </Link>
              </li>
            ))} */}
        <div className="p-10 text-xl text-zinc-300 ">
          <p className=" ">
            Welcome Show Box to your ultimate destination for all things movies and TV
            shows! We are passionate about bringing the latest and greatest
            entertainment to your screens, making it easier than ever to
            discover and enjoy your favorite films and series.
          </p>
          <p className="mt-2">
            At Show Box, our mission is simple: to provide a comprehensive
            platform where movie enthusiasts and TV buffs alike can immerse
            themselves in a world of entertainment. Whether you're a die-hard
            fan or just looking for something new to watch, we've got you
            covered.
          </p>
          <p className="mt-2">
            Ready to embark on your entertainment journey? Join us at Show Box
           and start exploring our vast library of movies and TV shows.
            Whether you're in the mood for action, comedy, romance, or something
            else entirely, we've got something for everyone. Thank you for
            choosing Show Box as your go-to destination for all your
            entertainment needs. Sit back, relax, and enjoy the show!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
