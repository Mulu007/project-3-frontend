import React, { useState } from 'react'


const CollectionCard = ({image, handleDelete}) => {
  const [readMore, setReadMore] = useState(false)
  

  return (
<div className='py-10'>
      <div className=" max-w-sm rounded overflow-hidden shadow-2xl hover:scale-105 duration-300 h-[890px] cursor-pointer">
        <img src={image.image_url} alt="" className=" float-left w-full h-[500px]" />
        <div className="px-6 py-10">
          <div className="font-bold text-black-500 text-3xl text-center mb-2 underline-offset-auto">
            Title: {image.title}
          </div>
          <ul>
            <li className='flex'>
              <strong>Description:</strong>
              <p>{readMore ? image.description : `${image.description.substring(0,5)}...`} </p>
              <button onClick={() => setReadMore(!readMore)}>{readMore?"show less":"read more"}</button>
            </li>
            <li>
              <strong>Year Published: </strong>
              {image.year_published}
            </li>
            <li>
              <strong>Genre: </strong>
              {image.genre}
            </li>
            <li className="px=6 py-4 text-3xl">
              <strong>Price: </strong>
              {"$" + image.price}
            </li>
          </ul>
          <button className=' w-full my-5 py-2 rounded-lg' onClick={() => handleDelete(image.id)}>DELETE</button>
        </div>
      </div>
    </div>
  ); 
}

export default CollectionCard
