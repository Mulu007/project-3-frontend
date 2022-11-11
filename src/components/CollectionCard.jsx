import React, { useState } from 'react'


const CollectionCard = ({image}) => {
  const [readMore, setReadMore] = useState(false)
  

  return (
<div className='py-10'>
      <div className=" max-w-sm rounded overflow-hidden shadow-2xl hover:scale-105 duration-300 h-[890px] cursor-pointer">
        <img src={image.image} alt="" className=" float-left w-full h-[500px]" />
        <div className="px-6 py-10">
          <div className="font-bold text-black-500 text-3xl text-center mb-2 underline-offset-auto">
            Title: {image.name}
          </div>
          <ul>
            <li className='flex'>
              <strong>Description:</strong>
              <p>{readMore ? image.description : `${image.description.substring(0,5)}...`} </p>
              <button onClick={() => setReadMore(!readMore)}>{readMore?"show less":"read more"}</button>
            </li>
            <li>
              <strong>Date Published: </strong>
              {image.datepublished}
            </li>
            <li>
              <strong>Genre: </strong>
              {image.category}
            </li>
            <li className="px=6 py-4 text-3xl">
              <strong>Price: </strong>
              {"$" + image.price}
            </li>
          </ul>
          <button className='bg-red-500' >DELETE</button>
        </div>
      </div>
    </div>
  ); 
}

export default CollectionCard
