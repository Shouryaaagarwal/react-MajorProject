import React from 'react' 
import loader from '/giphy.webp'

function Loading() {
  return (
    <div className='w-screen  h-screen flex justify-center items-center bg-black '>
      <img className='rounded-full' src={loader} alt="" />
    </div>
  )
}

export default Loading
