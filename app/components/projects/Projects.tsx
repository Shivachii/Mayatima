import React from 'react'

const Projects = () => {
  return (
    <div className="relative flex flex-col gap-8 items-center justify-center my-8">
        <div className="relative flex items-center justify-end    bg-[url('/child-sit.jpg')] bg-center bg-cover w-80 md:w-[700px] h-96">
            <div className="relative bg-white text-black items-center justify-center p-4 w-48  md:p-8 md:w-64">
                <h1 className='font-medium text-xl md:text-2xl my-2'>Kibera</h1>

                <p className='text-xs md:text-sm leading-relaxed my-2 text-gray-500 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quasi sint unde ad earum maxime eaque odit. </p>
                  <button 
                        type="submit" 
                        className='px-4 py-2 text-sm md:text-base border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white duration-500'
                    >
                        Read More
                    </button>
            </div>
            
        </div>
        <div className="relative flex items-center justify-end  bg-[url('/child-hand.jpg')] bg-center bg-cover w-80 md:w-[700px] h-96">
            <div className="relative bg-white text-black items-center justify-center p-4 w-48  md:p-8 md:w-64">
                <h1 className='font-medium text-xl md:text-2xl my-2'>Kibera</h1>

                <p className='text-xs md:text-sm leading-relaxed my-2 text-gray-500 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quasi sint unde ad earum maxime eaque odit. </p>
                  <button 
                        type="submit" 
                        className='px-4 py-2 text-sm md:text-base border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white duration-500'
                    >
                        Read More
                    </button>
            </div>
            
        </div>
        <div className="relative flex items-center justify-end  bg-[url('/child-friends.jpg')] bg-center bg-cover w-80 md:w-[700px] h-96">
            <div className="relative bg-white text-black items-center justify-center p-4 w-48  md:p-8 md:w-64">
                <h1 className='font-medium text-xl md:text-2xl my-2'>Kibera</h1>

                <p className='text-xs md:text-sm leading-relaxed my-2 text-gray-500 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quasi sint unde ad earum maxime eaque odit. </p>
                  <button 
                        type="submit" 
                        className='px-4 py-2 text-sm md:text-base border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white duration-500'
                    >
                        Read More
                    </button>
            </div>
            
        </div>
    </div>
  )
}

export default Projects