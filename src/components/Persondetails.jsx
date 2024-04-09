import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import {
  useParams,
  useNavigate,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";

function Persondetails() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie");
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? (
    <div className="px-[6%] w-screen h-[220vh] bg-[#1F1E24] flex flex-col">
      {/* Navigation  */}

      <nav className="w-full h-[10vh]  text-zinc-100 flex items-center gap-10 text-xl  ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>{" "}
      </nav>

      <div className="w-full flex f">
        {/* left poster and details */}
        <div className="w-[18%] flex flex-col">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.details.profile_path || info.details.backdrop_path
            }`}
            alt=""
          />
          <hr className="mb-2 mt-8 border-none h-[2px] bg-zinc-500" />
          {/* social mediaa */}
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.extenalids.facebook_id}`}
            >
              <i className=" text-2xl text-white ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.extenalids.instagram_id}`}
            >
              <i className=" text-2xl text-white ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.extenalids.twitter_id}`}
            >
              <i className=" text-2xl text-white ri-twitter-x-fill"></i>
            </a>
          </div>
          {/* personal info  */}

          <h1 className="text-2xl text-zinc-400 font-semibold my-2">
            Person Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold my-1">
            Known For
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.details.known_for_department}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold my-1">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.details.gender === "2" ? "Female" : "Male"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold my-1">Birthday</h1>
          <h1 className=" text-zinc-400 ">{info.details.birthday}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold my-1">Deathday</h1>
          <h1 className=" text-zinc-400 ">
            {info.details.deathday ? info.details.deathday : "Still Alive"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold my-1">
            Place of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.details.place_of_birth}</h1>
        </div>
        {/* Part 3 right details and informations  */}
        <div className="w-[83%] ml-[5%]">
          <h1 className="text-6xl font-black text-zinc-400  my-2">
            {info.details.name}
          </h1>
          <h1 className="text-lg mt-8 text-zinc-400 font-semibold my-1">
            Biography
          </h1>
          <p className="text-zinc-400">{info.details.biography}</p>
          <h1 className="text-lg mt-8 text-zinc-400 font-semibold my-1">
            Known For
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="text-xl mt-8 text-zinc-400 font-semibold my-1">
              Acting
            </h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <div className=" list-disc text-zinc-400 w-full h-[50vh] mt-4 over-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.5)] border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((c, i) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Persondetails;
