import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="relative bg-slate-100  m-4 lg:p-8  lg:m-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            {/* Image container */}
            <div className=" bg-[url('/child-hand.jpg')] bg-cover bg-center h-72 lg:h-96">
                </div>
             {/* Text container */}
             <div className="text-wrap p-4 m-4 mt-4 lg:mt-8">
                    <h1 className='text-2xl my-1 lg:my-2 font-bold underline decoration-4  decoration-yellow-400 underline-offset-4 '>
                        ABOUT US 
                    </h1>
                    <p className='my-2 text-wrap'>
                     At [Charity Organization Name], 
                     our mission is to bring hope, support,
                     and a brighter future to orphans around the world. 
                     We are dedicated to providing the love, care, and resources
                      these children need to thrive and succeed in life.
                    </p>
                    <Link href='' className='my-2 font-bold md:font-normal hover:underline decoration-yellow-400 underline-offset-4 hover:font-bold decoration-2'>MORE ABOUT US &rarr;</Link>
                </div>
                
               
        </div>
    </div>
  )
}

export default About