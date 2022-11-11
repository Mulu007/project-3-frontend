import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link, animateScroll as scroll} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-5xl'>📖</h1>
            <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-80} duration={500}>About</Link></li>
          <li><Link to="collection" smooth={true} offset={-64} duration={500}>Collection</Link></li>
            </ul>
        </div>
        <div className='hidden md:flex pr-4'>
            {/* <button className='border-none bg-transparent text-black mr-4 '>Add Book</button> */}
            {/* <button className='px-8 py-3'>Sign Up</button> */}
        </div>
        <div className='md:hidden' onClick={handleClick}>
            {!nav ? <AiOutlineMenu className='text-3xl'/> : <AiOutlineClose className='text-3xl'/>}
            
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-xinc-200 w-full px-8"}>
          <li><Link className='border-b-2 border-zinc-300 w-full' to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link className='border-b-2 border-zinc-300 w-full' to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link className='border-b-2 border-zinc-300 w-full' to="collection" smooth={true} offset={-50} duration={500}>Collection</Link></li>
        <div className='flex flex-col my-4'>
            {/* <button className='bg-transparent text-cyan-600 px-8 py-3 mb-4'>Add Book</button> */}
            {/* <button className='px-8 py-3'>Sign Up</button> */}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
