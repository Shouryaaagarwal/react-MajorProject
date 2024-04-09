import React from 'react' 
import notfound from '/giphyyy.webp'
import { Link , useNavigate } from 'react-router-dom'

function Notfound() { 
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'> 
    <Link
        onClick={() => navigate(-1)}
        className=" absolute hover:text-[#6556CD]  text-white text-2xl right-[5%] top-[5%] ri-close-fill"
      ></Link> 
      <img className='' src={notfound} alt="" /> 
    </div>
  )
}

export default Notfound
