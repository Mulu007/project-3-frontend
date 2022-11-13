import React from 'react'
import {HiOutlineBookOpen} from "react-icons/hi"
import {ImDatabase} from "react-icons/im"
import {VscReferences} from "react-icons/vsc"
import {FiWifi} from "react-icons/fi"
import image1 from "../assests/book2.jpg"

const Hero = () => {
  return (
    <div name="home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <h1 className='py-3  text-5xl md:text-7xl font-bold'>THE BOOK SPOT</h1>
            <p className='text-2xl'>The hub of information for empowerment.</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>WELCOME</button>
        </div>
        <div>
            <img classname="w-full" src={image1} alt="image1"/>
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Our Services </p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><HiOutlineBookOpen className='h-6 text-cyan-600 ' />E-Books</p>
                    <p className='flex px-4 py-2 text-slate-500'><ImDatabase className='h-6 text-cyan-600' />Databse storage</p>
                    <p className='flex px-4 py-2 text-slate-500'><VscReferences className='h-6 text-cyan-600' />Reference Services</p>
                    <p className='flex px-4 py-2 text-slate-500'><FiWifi className='h-6 text-cyan-600' />Internet Accessibility</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero
