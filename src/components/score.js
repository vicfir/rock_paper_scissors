import React from 'react'

export const Score = (props) => {
  return (
    <div className='flex justify-between max-w-3xl mx-auto border-2 border-slate-500 rounded-xl p-5 '>
        <div className='font-bold text-3xl leading-none text-white'>
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
        </div>
        <div className='bg-white px-9 rounded-lg flex flex-col justify-center items-center leading-none'>
            <p className='text-sm tracking-widest text-indigo-700 font-semibold'>SCORE</p>
            <p className='font-bold text-5xl text-slate-600'>{props.score}</p>
        </div>
    </div>
  )
}
