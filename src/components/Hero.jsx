import React from 'react'
import heroVid from "../assets/video.mp4"

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className='h-full w-full object-cover absolute -z-10' src={heroVid} loop muted autoPlay></video>

        <div className='w-full h-[90%] flex flex-col justify-center text-center px-4 items-center text-white '>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='text-[#00d8ff]'>Trading</span> Protocol</h1>
            <p className='text-xl py-4'>Guranteed trading for millions of users and top Ethereum applications</p>
            <div>
                <button className='m-2'>Use Defi</button>
                <button className='m-2'>FAQ</button>
            </div>
        </div>
        <div>
            <p className='text-center text-white text-2xl font-semibold'>Total Volume Secured: $45,204,583,763,52</p>
        </div>
    </div>
  )
}

export default Hero