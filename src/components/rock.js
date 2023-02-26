import React from 'react'
import  rock  from "../assets/icon-rock.svg";

export const Rock = ({setSelectedChoice}) => {

  return (
    <div onClick={()=>setSelectedChoice({selected: true, choice:"rock"})} className='choiceRock'>
        <img src={rock} alt="" />
    </div>
  )
}