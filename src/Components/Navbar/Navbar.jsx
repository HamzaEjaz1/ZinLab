import React from 'react'
import { FaSearch } from "react-icons/fa";
import { PiGearThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='bg-[white] py-3 '>
    <div className='flex justify-between items-center px-6 py-5 ' >
    <div className='flex font-bold'><PiGearThin  style={{margin:"2px 7px", padding:"2px 2px", fontSize:"25px", backgroundColor:'#747bf4' ,color:'white'}}/>ZinTools</div>
    <div className="rounded-full bg-gray-100 px-3 py-1">

    <input type='text' placeholder='Search for a movie Tv Shows Theme & cast' style={{border:"none"}} className='w-[400px] px-7 py-1 bg-transparent'></input><button><FaSearch/></button>    
</div>    

    <div>
    <button className='px-7 py-1 '>Log in</button>
    <button className='px-7 py-1  bg-blue-500 text-white rounded-full'>Sigin</button></div>
    
    
    </div>

    <div>
    <ul className='flex px-8 py-3 justify-around'>
    <li>Stock Video</li>
    <li>Video Template</li>
    <li>Video Music</li>
    <li>Sound Effect</li>
    <li>Graphic template</li>
    <li>Graphic</li>
    <li>Presentation Template</li>
    <li>Photo</li>
    <li>Font</li>
    <li>Adds on</li>
    <li>More</li>
    
    </ul>
    </div>
    
    </div>
  )
}

export default Navbar