'use client'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

const Donate = () => {
  const router = useRouter()
  
  return (
    <div className="flex items-center justify-center p-4 m-4">
   <div className="container bg-slate-100 shadow-xl relative space-x-4 flex flex-row items-center justify-center p-4 m-4 max-h-72 max-w-80 ">
    <FontAwesomeIcon icon={faHandHoldingHeart} className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] p-2 lg:p-4  lg:w-[80px] lg:h-[80px] text-yellow-400 ' />
      <div className="flex flex-col space-y-2">
      <p className='font-medium'>Help Us Help An Orphan Today!</p>
      <button onClick={() => router.push('/donate')} className='bg-yellow-400 hover:-translate-y-2 duration-300 px-2 py-2 hover:bg-yellow-400 rounded-md'>Donate Now</button>
      </div>
  </div>
</div>

  )
}

export default Donate