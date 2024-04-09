import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import {
  useParams,
  useNavigate,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
import Notfound from "./Notfound";

function Tvdetails() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className=" relative w-screen h-[230vh] px-[10%] "
    >
      {/* Navigation */}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl  ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>{" "}
        <a target="_blank" href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        {/* <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.extenalids.wikidata_id}`}>
          <i className="ri-earth-fill"></i>
        </a> */}
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.extenalids.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Poster and details  */}

      <div className="w-full flex  ">
        <img
          className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black ">
            {" "}
            {info.details.original_name ||
              info.details.name ||
              info.details.title ||
              info.details.original_title}
            <small className="text-xl font-semibold ml-1 text-zinc-300  ">
              ({info.details.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex mb-4  items-center gap-x-4  mt-3 ">
            <span className=" bg-yellow-600 rounded-full text-l font-semibold text-white w-[6vh] h-[6vh] mt-2 flex justify-center items-center  ">
              {(info.details.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] text-xl leading-5 font-semibold">
              User score
            </h1>
            <h1>{info.details.first_air_date}</h1>
            <h1>{info.details.genres.map((g) => g.name).join(" , ")}</h1>
            <h1>{info.details.runtime}min</h1>
          </div>
          <h1 className="text-2xl font-semibold italic text-zinc-200">
            {info.details.tagline}
          </h1>
          <h1 className="text-2xl mt-5 mb-2">Overview</h1>
          <p className="mb-9">{info.details.overview}</p>
          

          <Link
            className=" rounded-md py-4 px-6 bg-[#6556CD] hover:bg-[#401F71] "
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill mr-1 "></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Platforms */}

      <div className="w-[80%] flex flex-col gap-y-2 mt-10 mb-7">
        {info.watchprovider && info.watchprovider.flatrate && (
          <div className="flex text-white gap-9 ">
            <h1>Available of Platforms</h1>
            {info.watchprovider.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-fit rounded-md  "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}

        {info.watchprovider && info.watchprovider.rent && (
          <div className="flex gap-10 mt-5 text-white">
            <h1>Available On Rent </h1>
            {info.watchprovider.rent.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-fit rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}

        {info.watchprovider && info.watchprovider.buy && (
          <div className="flex gap-10 mt-7 text-white ">
            <h1>Available to Buy </h1>

            {info.watchprovider.buy.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-fit rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}
      </div>
      <hr />

      {/* Seasons*/}
      <hr className="mb-2 border-none" />
      <h1 className="text-2xl font-semibold text-white">Seasons</h1>
      <div className="w-[100%] flex   p-5 overflow-y-hidden mb-5">
        {info.details.seasons.length>0?info.details.seasons.map((s, i) => (
          <div className="w-[15vh] mr-[10%]">
            <img
              className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[14vw] h-[40vh] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                s.poster_path || s.backdrop_path
              }`}
              alt=""
            />
            <h1 className="text-xl text-zinc-300 font-semibold mt-3">
             {s.name}
            </h1>
          </div>
        )):<h1 className="text-3xl text-white font-black text-center mt-5">Nothing to show</h1>}
      </div>
      <Outlet />

      <hr className="" />
      {/* Recommendations */}
      <hr className="mb-2 border-none" />
      <h1 className="text-2xl font-semibold text-white">
        Recommendations & Similar
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default Tvdetails;
