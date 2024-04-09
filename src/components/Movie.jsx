import React from 'react' 
import  { useEffect, useState } from 'react' 
import {useNavigate} from 'react-router-dom' 
import axios from '../utils/axios' 
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from './partials/Topnav';
import Loading from './Loading';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';

function Movie() { 
    document.title="Movies"
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]); 
    const [page , setpage] =useState(1) ; 
    const [hasMore , sethasMore] = useState(true) 

    const GetMovie = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
        //   settrending(data.results);  
        if(data.results.length>0){
            setmovie((prev)=>[...prev, ...data.results]); 
            setpage(page+1) ;
        }    else{
            sethasMore(false) ;
        } 
        } catch (error) {
          console.log(error);
        }
      };
     
      const refreshhandler= ()=>{
        if(movie.length===0){
            GetMovie();
        }else{ 
            setpage(1) ;
            setmovie([]) ;
            GetMovie();
        }
      }
    
    
      useEffect(() => {
        refreshhandler() ;
    }, [category]);
  return movie.length > 0 ? (
    <div className="w-screen  h-screen ">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className="text-2xl  text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
       Movies <small className='text-sm text-zinc-600'>({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav className="" />
          <Dropdown
            title="Category"
            options={["popular", "top_rated","upcoming", "now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
          
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie} 
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title="movie"></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
}

export default Movie
