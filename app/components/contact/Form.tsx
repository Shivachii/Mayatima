import React from 'react'

const Form = () => {
  return (
    <div className="w-full h-full ">
        <div className="flex flex-col items-center space-y-2">
        <h1 className='text-xl md:text-3xl font-bold'>Reach Out to Us</h1>
        <h4 className='text-base md:text-3xl '>Drop us a Line</h4>
        <div className=" bg-blue-600 w-16 h-0.5 md:w-24 md:h-0.5 m-4 rounded-md"></div>
        </div>
        
            {/* Form Container */}
                <div className="bg-slate-100 shadow-xl relative flex  items-center justify-center md:p-8 md:mx-24    lg:mx-32 p-4 m-4">
                    <form action="" method="post" className='' >

                    <div className="flex flex-col gap-2 my-4 p-2">
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" name="" id="" placeholder='Jane Doe' required className='px-4 py-2  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md' />
                    </div>
                        <div className="flex flex-col  space-y-4 md:flex md:flex-row  md:space-x-8 my-4 p-2">
                                <div className="flex flex-col gap-2">
                                    <label >Email</label>
                                    <input type="email" name="" id=""  placeholder='JaneDoe@gmail.com' required className='px-4 py-2   placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300  rounded-md'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fname">Phone Number</label>                   
                                    <input type="tel" name="" id=""  placeholder='+254 000 000 000' required className='px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md'/>
                                </div>
                        </div>
                        <div className="flex flex-col space-y-4 md:flex md:flex-row md:space-x-8 my-4 p-2">
                             <div className="flex flex-col gap-2">
                                <label htmlFor="fname">Subject</label>                   
                                <input type="text" name="" id="" placeholder='Subject' required className='px-4 py-2   placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md' />
                            </div>
                    
                            <div className="flex flex-col gap-2 ">
                                    <label htmlFor="fname">Message</label>                  
                                    <textarea name="" id="" placeholder='Message' required className='px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md'></textarea>
                            </div>
                        </div>
                                     
                   
                    <div className="flex flex-row space-x-2  my-4 justify-evenly">
                        <button type="submit" className='px-8 py-2 bg-blue-400  hover:opacity-85'>Submit</button>
                        <button type="reset" className='px-8 py-2 bg-blue-400  hover:opacity-85'>Reset</button>
                    </div>
                    </form>
                </div>
    </div>
  )
}

export default Form