import React from 'react'
import '../style/choice.scss'
import { Paper } from './paper'
import { Rock } from './rock'
import { Scissors } from './scissors'
import triangle from "../assets/bg-triangle.svg";

export const Choice = () => {
  return (
    <div id='choice' className="flex justify-center items-center mx-auto mt-20">
        <Paper/>
        <Rock/>
        <Scissors/> 
        <img src={triangle} className="w-2/3 h-2/3" alt="" />
    </div>
  )
}
