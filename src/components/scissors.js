import React from 'react'
import  scissors  from "../assets/icon-scissors.svg";

export const Scissors = ({setSelectedChoice}) => {
  return (
    <div onClick={()=>setSelectedChoice({selected: true, choice:"scissors"})} className='choiceScissors'>
        <img src={scissors} alt="" />
    </div>
  )
}