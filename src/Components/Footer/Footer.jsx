import React from 'react'
import { FaFacebook,FaTwitter,FaYoutube } from 'react-icons/fa'
import { FaMoon } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='h-[95vh] w-[100%] bg-gray-300 px-10 py-5'>
    <div className='flex item-center'><p className='text-[17px]'>Follow us</p>
    <FaFacebook className='mx-5 my-2 text-[15px]'/>
    <FaTwitter className='mx-5 my-2 text-[15px]'/>
    <FaYoutube className='mx-5 my-2 text-[15px]'/>
    
    </div>
    
    <hr className='my-5'/>
<div className='flex justify-between'>
<div>

<ul>
<li className='pb-5'><b className=''>Internal Links</b>
</li>
<li className='py-3 text-gray-700'>Documentaries</li>
<li className='py-3 text-gray-700'>Thems</li>
<li className='py-3 text-gray-700'>Chrome Casts</li>

</ul>
</div>


<div>

<ul>
<li className='pb-5'><b className=''>Enterprise</b>
</li>
<li className='py-3 text-gray-700'>Download chrome browser</li>
<li className='py-3 text-gray-700'>Chrome Browser for Enterprise</li>
<li className='py-3 text-gray-700'>Chrome Browser Devices</li>
<li className='py-3 text-gray-700'>ChromeOS</li>
<li className='py-3 text-gray-700'>Google Cloud</li>
<li className='py-3 text-gray-700'>Google Workspace</li>
</ul>
</div>


<div>

<ul>
<li className='pb-5'><b className=''>Internal Links</b>
</li>
<li className='py-3 text-gray-700'>Documentaries</li>
<li className='py-3 text-gray-700'>Thems</li>
<li className='py-3 text-gray-700'>Chrome Casts</li>


</ul>
</div>
<div>

<ul>
<li className='pb-5'><b className=''>Enterprise</b>
</li>
<li className='py-3 text-gray-700'>Download chrome browser</li>
<li className='py-3 text-gray-700'>Chrome Browser for Enterprise</li>
<li className='py-3 text-gray-700'>Chrome Browser Devices</li>
<li className='py-3 text-gray-700'>ChromeOS</li>
<li className='py-3 text-gray-700'>Google Cloud</li>
<li className='py-3 text-gray-700'>Google Workspace</li>
</ul>
</div>
<div>

<ul>
<li className='pb-5'><b className=''>Internal Links</b>
</li>
<li className='py-3 text-gray-700'>Documentaries</li>
<li className='py-3 text-gray-700'>Thems</li>
<li className='py-3 text-gray-700'>Chrome Casts</li>


</ul>
</div>





</div>

<hr className='my-6'></hr>

<div className='flex justify-between items-baseline'>
<div className=''>
<ul className='flex'>
<li className='text-2xl'><b>Simlar</b> <span className='bg-[black] text-white px-7 py-1 rounded-full'>Watch</span></li>
<li className='mx-5 text-gray-700'>Privacy Policy</li>
<li className='mx-5 text-gray-700'>Terms and Conditions</li>
<li className='mx-5 text-gray-700'>Cookies Policies</li>
<li className='mx-5 text-gray-700'>About us</li>
</ul>
</div>
<div><FaMoon className='text-[40px] p-1 bg-[#d1d1d1] rounded-full text-[white]'/></div>

</div>

    </div>
  )
}

export default Footer