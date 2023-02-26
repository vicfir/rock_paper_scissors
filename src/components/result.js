import React, { useState, useEffect } from 'react';

import '../style/result.scss'

import { Paper } from './paper'
import { Rock } from './rock'
import { Scissors } from './scissors'

const housePickedArr = ["rock", "scissors", "paper"];

export const Result = ({setSelectedChoice,selectedChoice,score,setScore}) => {

    const [sec, setsec] = useState(3);
    const [show, setShow] = useState(false);
    const [winLose, setWinLose] = useState("");
    const [housePicked, setHousePicked] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setsec(prevSec => prevSec > 0 ? prevSec - 1 : prevSec);
        }, 1000);

        if (!housePicked) {
            setHousePicked(housePickedArr[Math.floor(Math.random()*housePickedArr.length)]);
        }

        let showBtn = setTimeout(() => {
            setShow(true);
          }, 3100);

        return () => {
            clearInterval(timer);
            clearTimeout(showBtn);}
    }, [housePicked]);

    useEffect(() => {
        if (selectedChoice.choice ===  housePicked ) {
          setWinLose("TIE");
          setTimeout(() => setScore(score), 3000);
        } else if (selectedChoice.choice === "rock") {
          if (housePicked === "scissors") {
            setWinLose("YOU WIN");
            setTimeout(() => setScore(score + 1), 3000);
          } else {
            setWinLose("YOU LOOSE");
            setTimeout(() => setScore(score - 1), 3000);
          }
        } else if (selectedChoice.choice === "scissors") {
          if (housePicked === "paper") {
            setWinLose("YOU WIN");
            setTimeout(() => setScore(score + 1), 3000);
          } else {
            setWinLose("YOU LOOSE");
            setTimeout(() => setScore(score - 1), 3000);
          }
        } else if (selectedChoice.choice === "paper") {
          if (housePicked === "rock") {
            setWinLose("YOU WIN");
            setTimeout(() => setScore(score + 1), 3000);
          } else {
            setWinLose("YOU LOOSE");
            setTimeout(() => setScore(score - 1), 3000);
          }
        }
      }, [selectedChoice.choice, housePicked]);

  return (
    <div id='result'>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col'>
                <p className='text-white font-bold text-center my-10'>YOU PICKED</p>
                {selectedChoice.choice === "rock"? <Rock/>: selectedChoice.choice === "scissors" ? <Scissors/> : selectedChoice.choice === "paper" ? <Paper/> : null}
            </div>

            {show ? 
            <div className='flex flex-col justify-center'> 
                <p className='text-white font-bold text-center mt-10 mx-10 text-4xl'>{winLose}</p> 
                <button className='bg-white rounded-lg px-10 py-1 mx-10 my-5 font-bold text-gray-500 hover:text-red-400' onClick={()=>{setSelectedChoice({selected: false});setShow(false)}}>PLAY AGAIN</button> 
            </div> : null}

            <div className='flex flex-col'>
                <p className='text-white font-bold text-center my-10'>THE HOUSE PICKED</p>

                {sec > 0 ? <div className='timer'><p>{sec}</p></div> : housePicked === "rock"? <Rock/>: housePicked === "scissors" ? <Scissors/> : housePicked === "paper" ? <Paper/> : null}
                
            </div>
        </div>
    </div>
  )
}
