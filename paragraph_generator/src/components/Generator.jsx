


import React, { useState } from 'react';
import { Datas } from './Data';

export const Generator = () => {
  const [count, Setcount] = useState(0)
  const [text, Settext] = useState([])

  function OnHandle(e) {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 10) {
      amount = 10
    }

    Settext(Datas.slice(0, amount))
  }


  return (
    <main className='bg-gray-700 h-screen flex items-center justify-center'>
      <div className='bg-gray-500 p-6 rounded-lg'>
        <form className='flex flex-col items-center' onSubmit={OnHandle}>
          <h1 className='italic text-white text-center text-2xl mb-4'>
            Paragraph Generator
          </h1>

          <div className='bg-white p-4 rounded-lg w-full max-w-md'>
            <label htmlFor="number-input" className='block mb-2 text-gray-700'>
              Select a number :
            </label>
            <input
              type="number"
              id="number-input"
              value={count}
              onChange={(e) => Setcount(e.target.value)}
              placeholder="Enter"
              required
              className='w-full border border-gray-300 p-2 rounded-lg'

            />
            <button className='hover:bg-gray-600 bg-blue-400 rounded-lg my-2 text-white p-2 flex justify-center items-center'>
              Generate
            </button>
          </div>
        </form>
        <article className='my-3 p-2 text-white'>
          {text.map((values) => (
            <p>{values}</p>
          ))}
        </article>

      </div>
    </main>
  );
};
