import Header from '@/app/components/get-involved/partnerships/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <main className="w-full h-full">
        {/* Header */}
        <Header/>
        <div className="relative p-4 m-4 md:p-8 md:m-8">
            <h1 className="text-2xl md:text-3xl font-medium text-blue-400 mb-4">
            Companies and Corporates
            </h1>
            <p className="md:text-justify text-wrap leading-relaxed">
            Do you work for or run a company that aligns with our commitment to creating opportunities and advancing social justice? 
            We&apos;re seeking meaningful partnerships with organizations that share our vision.
            By partnering with us, you&apos;ll not only support our cause but also show your customers,
            clients, and staff that you are actively contributing to a fairer world where everyone
            has access to opportunities for a better future. 
            </p>
            <p className='md:text-justify text-wrap mt-4 mb-8'>
            Partnerships can take various forms,
             and we&apos;re excited to tailor an arrangement that fits your needs and resources.
            </p>
            <p className="md:text-justify text-wrap my-2">
            If you&apos;d like to discuss potential ideas please do not hesitate to contact us 
            <Link href="" target='blank' className='font-bold m-1 hover:underline decoration-2 decoration-yellow-400 underline-offset-4'> ABC@gmail.com</Link>
            </p>
        </div>
        <div className="relative p-8 m-8">
            <h1 className="text-2xl md:text-3xl font-medium text-blue-400 mb-4">
            School, Colleges and Universities
            </h1>
            <div className="flex flex-col gap-8 md:flex md:flex-row ">
             <div className="md:w-1/2">
                <p className="text-justify leading-relaxed mt-4 mb-8">
            We warmly invite your institution to collaborate with us 
             in our mission to create a brighter future for orphaned children in Kenya.
              By partnering with us, you can play a vital role in supporting educational 
              and developmental opportunities for these deserving young individuals.
            </p>
            <p className="text-justify leading-relaxed mt-4 mb-8">
            Our collaboration can take many forms, from student-led initiatives and fundraising events 
            to educational outreach and volunteer opportunities. We are eager to work together to inspire 
            and empower both your students and our beneficiaries, fostering a spirit of community and shared purpose.
            </p>
            <p className="text-justify leading-relaxed">
            Join us in making a meaningful impact and demonstrating your commitment to social responsibility and educational equity.
             We look forward to exploring how we can work together to create lasting positive change.
            </p>
            <p className="my-4">
            We&apos;d love to chat about ideas with you so please do not hesitate to contact us at 
            <Link href="" target='blank' className='font-bold m-1 hover:underline decoration-2 decoration-yellow-400 underline-offset-4'> ABC@gmail.com</Link>
            </p>
        </div>
        <div className="my-8 bg-[url('/children.jpg')] bg-cover h-80 md:w-1/2 bg-center shadow-xl rounded-md">
        </div>
            
            </div>
        </div>
   </main>  
  )
}

export default page