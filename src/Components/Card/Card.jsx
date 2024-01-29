import React from 'react'
import { FaEdit } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className=''>
    <div className='px-5 hover:bg-white  bg-[rgb(241, 241, 241)] py-5 block w-64 my-5 rounded border border-gray-200'>
<FaEdit className='text-8xl text-[orange] my-5'/>
    <h2 className='text-xl font-bold'>{props.heading}</h2>
    <p>{props.para}</p>
    </div>
    
    
    </div>
  )
}

export default Card