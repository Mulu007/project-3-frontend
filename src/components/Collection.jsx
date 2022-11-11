import React, { useEffect, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"

import CollectionCard from './CollectionCard'

const Collection = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages();
  },[])

  function getImages() {
   fetch(`http://localhost:3002/books`)
    .then((response) => response.json())
    .then((data) =>
        setImages(data)
    );
  }

  function handleDelete(id) {
    fetch(`http://localhost:3002/books/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => {
      getImages();
    })
  }

  return (
    <div name="collection" className="bg-zinc-200">
      <div className="text-4xl text-center font-bold py-4">
        <h1>Our Collection</h1>
      </div>
      <div className='bg-gray-100 sm:ml-60 md:ml-96 rounded-full flex justify-center items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={30}/>
                <input className="bg-transparent p-2 focus:outline-none w-full" type="text" placeholder='Search books' />
            </div>
      <div className="container-mx-auto ">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {images.map((image) => (
            <CollectionCard key={image.id} image={image} handleDelete={handleDelete}/>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Collection
