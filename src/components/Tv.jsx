import React from 'react' 
import  { useEffect, useState } from 'react' 
import {useNavigate} from 'react-router-dom' 
import axios from '../utils/axios' 
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from './partials/Topnav';
import Loading from './Loading';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';

function Tv() { 
    document.title="Movies"
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]); 
    const [page , setpage] =useState(1) ; 
    const [hasMore , sethasMore] = useState(true) 

    const GetTv = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
        //   settrending(data.results);  
        if(data.results.length>0){
            settv((prev)=>[...prev, ...data.results]); 
            setpage(page+1) ;
        }    else{
            sethasMore(false) ;
        } 
        } catch (error) {
          console.log(error);
        }
      };
     
      const refreshhandler= ()=>{
        if(tv.length===0){
            GetTv();
        }else{ 
            setpage(1) ;
            settv([]) ;
            GetTv();
        }
      }
    
    
      useEffect(() => {
        refreshhandler() ;
    }, [category]);
  return tv.length > 0 ? (
    <div className="w-screen  h-screen ">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className="text-2xl  text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
       Tv shows <small className='text-sm text-zinc-600'>({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav className="" />
          <Dropdown
            title="Category"
            options={["popular", "top_rated","on_the_air", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv} 
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv"></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
}

export default Tv
