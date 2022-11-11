import React from 'react';
import {AiOutlineArrowRight, AiOutlineUserAdd} from "react-icons/ai"
import {GiPayMoney, GiShakingHands} from "react-icons/gi"
import video1 from "../assests/video.mp4"

const About = () => {
  return (
  <div name="about" className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-500/90 absolute'>
        <video className='w-full h-full object-cover mix-blend-overlay' src={video1} autoPlay loop muted />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>About</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Our Mission</h3>
              <p className='py-4 text-3xl text-slate-300'>To preserve the national documentary heritage and enable access to information and knowledge for transformation of livelihoods.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <AiOutlineUserAdd className='text-6xl w-16 p-4 bg-cyan-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Users Training</h3>
                      <p className='text-gray-600 text-xl'>Provide facilities for the study and training in the principles of librarianship and such other related subjects as the Board may determine.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-cyan-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <GiPayMoney className='text-6xl w-16 p-4 bg-cyan-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sponsorship</h3>
                      <p className='text-gray-600 text-xl'>Sponsor, arrange or provide facilities for conferences and seminars for discussion on matters in connection with library and related services.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-cyan-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <GiShakingHands className='text-6xl w-16 p-4 bg-cyan-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Public Interests</h3>
                      <p className='text-gray-600 text-xl'>Stimulate Public interest in books and promote information literacy for knowledge, information and leisure amongst all of its users and readers.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-cyan-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default About;