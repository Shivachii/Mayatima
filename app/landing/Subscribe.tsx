import React from 'react'

const Subscribe = () => {
  return (
   <div className="relative  bg-slate-100">
        {/* FORM CONTAINER */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-max md:h-64 p-5 ">
            <h1 className='text-center text-3xl font-bold m-2 p-2'>Keep in touch</h1>
            <h3 className='text-center text-xl font-medium m-2 p-2'> Get the latest news & updates</h3>
            <form action="" method="post" className='flex flex-col gap-4 md:flex-row items-center justify-center m-4 p-4'>
    <input 
        type="text" 
        placeholder='First Name' 
        className='px-4 py-2 bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300' 
    />
    <input 
        type="text" 
        placeholder='Last Name' 
        className='px-4 py-2 bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300' 
    />
    <input 
        type="email" 
        placeholder='Your Email Address' 
        className='px-4 py-2 bg-black text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300' 
            
    />
    <button 
        type="submit" 
        className='px-4 py-2 bg-yellow-300 hover:opacity-85'
    >
        Subscribe
    </button>
</form>

        </div>
   </div>
  )
}

export default Subscribe