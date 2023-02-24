import React from 'react'
import rules from '../assets/image-rules.svg'
import close from '../assets/icon-close.svg'
import '../style/rules.scss'

export const Rules = ({modal}) => {
  return (
    <div id='rules'>
        <div className='bgModal' onClick={() => modal(false)}></div>
        <div className='modal flex flex-col p-8'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-2xl text-gray-600'>RULES</h2>
                <img src={close} onClick={() => modal(false)}/>
            </div>
            <img className='p-8' src={rules} alt="" />
        </div>
    </div>
  )
}
