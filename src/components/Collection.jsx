import React, { useEffect, useState } from "react";

import CollectionCard from './CollectionCard'

const Collection = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages();
  },[])

  function getImages() {
   fetch(`https://sheltered-crag-19830.herokuapp.com/books`)
    .then((response) => response.json())
    .then((data) =>
        setImages(data)
    );
  }

  function handleDelete(id) {
    fetch(`https://sheltered-crag-19830.herokuapp.com/books/${id}`, {
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
