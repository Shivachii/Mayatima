import Form from '@/app/components/contact/Form'
import Header from '@/app/components/contact/Header'
import { faEnvelope, faLocation, faLocationDot, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Contact = () => {
  return (
    <main className="w-full h-full">
      {/* Header section */}
      <Header/>
        {/* Quick Links section */}
      <div className="flex flex-row  flex-wrap items-center justify-center  p-4 m-4">
        <div className="flex flex-col border border-slate-300  w-64 p-4 m-2 items-center justify-center text-center rounded-md hover:shadow-xl duration-300">
            <FontAwesomeIcon icon={faEnvelope} className='text-blue-400  p-4  w-[40px] h-[40px] md:w-[50px] md:h-[50px]'/>
            <p className='my-2 font-bold'>Send Us Mail</p>
            <p className='my-2'>@gmail.com</p>
        </div>
        <div className="iconcont flex flex-col border border-slate-300  w-64 p-4 m-2 items-center justify-center text-center rounded-md hover:shadow-xl duration-300">
            <FontAwesomeIcon icon={faPhone} className='text-blue-400   p-4  w-[40px] h-[40px] md:w-[50px] md:h-[50px] '/>
            <p className='my-2 font-bold'>Call Us Anytime</p>
            <p className='my-2'>+254 111 222 333</p>
        </div>
        <div className="flex flex-col border border-slate-300  w-64 p-4 m-2 items-center justify-center text-center rounded-md hover:shadow-xl duration-300 ">
            <FontAwesomeIcon icon={faLocationDot} className='text-blue-400   p-4  w-[40px] h-[40px] md:w-[50px] md:h-[50px]  '/>
            <p className='my-2 font-bold'>Visit Our Office</p>
            <p className='my-2'>Nairobi, Kenya</p>
        </div>
      </div>
        {/* Contact Form */}
        <Form/>
    </main>
  )
}

export default Contact