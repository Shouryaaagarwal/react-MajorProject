import React from 'react' 
import  { useEffect, useState } from 'react' 
import {useNavigate} from 'react-router-dom' 
import axios from '../utils/axios' 
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from './partials/Topnav';
import Loading from './Loading';
import Cards from './partials/Cards';

function People() { 
    document.title="People"
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]); 
    const [page , setpage] =useState(1) ; 
    const [hasMore , sethasMore] = useState(true) 

    const Getpeople = async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);
        //   settrending(data.results);  
        if(data.results.length>0){
            setpeople((prev)=>[...prev, ...data.results]); 
            setpage(page+1) ;
        }    else{
            sethasMore(false) ;
        } 
        } catch (error) {
          console.log(error);
        }
      };
     
      const refreshhandler= ()=>{
        if(people.length===0){
            Getpeople();
        }else{ 
            setpage(1) ;
            setpeople([]) ;
            Getpeople();
        }
      }
    
    
      useEffect(() => {
        refreshhandler() ;
    }, [category]);
  return people.length > 0 ? (
    <div className="w-screen  h-screen ">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className="text-2xl  text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
       People <small className='text-sm text-zinc-600'>({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav className="" />
         
        </div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={Getpeople} 
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people} title="person"></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading></Loading>
  );
}

export default People
