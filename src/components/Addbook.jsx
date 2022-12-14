import React, { useState } from 'react'

const Addbook = () => {
  const [title, setTitle] = useState("");
  const [image_url, setImage_Url] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [year_published, setYear_Published] = useState('');
  const [genre, setGenre] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const book = { title, image_url, description, price, year_published, genre };

    fetch('https://sheltered-crag-19830.herokuapp.com/books', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    }).then(() => {
      console.log('new book added');
    });
  }


  return (
    <div className='bg-zinc-200' >
      <h2 className="text-4xl dark:text-white font-bold text-center">Add a New Book</h2>
      <div className='flex flex-col justify-center'>
        <form className="max-w-[600px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={handleSubmit}>
            <div className="flex flex-col text-gray-400 py-2">
                <label>Book Name:</label>
                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  required  value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div >
            <div className="flex flex-col text-gray-400 py-2">
                <label>Book Image:</label>
                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"   required  value={image_url} onChange={(e) => setImage_Url(e.target.value)}/>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
                <label>Book Description:</label>
                <textarea className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
                <label>Book Price:</label>
                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text"  required  value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
                <label>Book Year Published:</label>
                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="number"  required  value={year_published} onChange={(e) => setYear_Published(e.target.value)}/>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
                <label>Book Genre:</label>
                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text"  required  value={genre} onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <button className="w-full my-5 py-2 bg-cyan-600 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40 text-white font-semibold rounded-lg">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Addbook
