import React from 'react'
import { Paper } from './paper'
import { Rock } from './rock'
import { Scissors } from './scissors'
import triangle from "../assets/bg-triangle.svg";

export const Choice = () => {
  return (
    <div>
        {/* <Paper/>
        <Rock/>
        <Scissors/> */}
        <img src={triangle} alt="" />
    </div>
  )
}
