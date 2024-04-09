import React, { useEffect, useState } from 'react' 
import {useNavigate} from 'react-router-dom' 
import axios from '../utils/axios' 
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from './partials/Topnav';
import Loading from './Loading';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';


function Popular() {  
    document.title="Popular"
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]); 
    const [page , setpage] =useState(1) ; 
    const [hasMore , sethasMore] = useState(true) 

    const GetPopular = async () => {
        try {
          const { data } = await axios.get(`${category}/popular?page=${page}`);
        //   settrending(data.results);  
        if(data.results.length>0){
            setpopular((prev)=>[...prev, ...data.results]); 
            setpage(page+1) ;
        }    else{
            sethasMore(false) ;
        } 
        } catch (error) {
          console.log(error);
        }
      };
     
      const refreshhandler= ()=>{
        if(popular.length===0){
            GetPopular();
        }else{ 
            setpage(1) ;
            setpopular([]) ;
            GetPopular();
        }
      }
    
    
      useEffect(() => {
        refreshhandler() ;
    }, [category]); 


  return popular.length > 0 ? (
    <div className="w-screen  h-screen ">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className="text-2xl  text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
        Popular
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav className="" />
          <Dropdown
            title="Category"
            options={["movie", "tv",]}
            func={(e) => setcategory(e.target.value)}
          />
          
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular} 
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
}

export default Popular
