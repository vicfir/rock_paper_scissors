import React from 'react'

import '../style/result.scss'

import { Paper } from './paper'
import { Rock } from './rock'
import { Scissors } from './scissors'

export const Result = ({setSelectedChoice,selectedChoice}) => {
  return (
    <div>
        <div className='flex'>
            {selectedChoice.choice === "rock"? <Rock/>: selectedChoice.choice === "scissors" ? <Scissors/> : selectedChoice.choice === "paper" ? <Paper/> : null}
        </div>

        <button onClick={()=>setSelectedChoice({selected: false})}>PLAY AGAIN</button>
    </div>
  )
}
