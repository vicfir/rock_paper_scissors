import React from 'react'

export const Score = () => {
  return (
    <div className='flex justify-between max-w-3xl mx-auto'>
        <div className=''>
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
        </div>
        <div>
            <p>SCORE</p>
            <p>12</p>
        </div>
    </div>
  )
}
