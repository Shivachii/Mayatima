import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="relative flex w-full bg-[url('/child-hand.jpg')] bg-cover h-48 md:h-56 bg-center">
        <div className="relative flex flex-col w-full space-y-4 top-14 md:top-8 p-4 m-4  ">
        <h1 className="font-bold text-3xl md:text-6xl text-white">Volunteer with Us</h1>
        <div className=" flex flex-row text-lg md:text-xl space-x-4  md:p-4 ">
                <Link href="/" className=' text-white hover:font-bold hover:underline decoration-2 decoration-yellow-400 underline-offset-4'>Home</Link>
                <p className=' text-white'> &gt;</p>
                <p className='text-yellow-300 cursor-text'>Volunteer </p>
         </div>
         </div>
        
    </div>
    
  )
}

export default Header