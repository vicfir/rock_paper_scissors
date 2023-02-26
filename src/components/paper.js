import React from 'react'
import  paper  from "../assets/icon-paper.svg";

export const Paper = ({setSelectedChoice}) => {
  return (
    <div onClick={()=>setSelectedChoice({selected: true, choice:"paper"})} className='choicePaper'>
        <img src={paper} alt="" />
    </div>
  )
}
