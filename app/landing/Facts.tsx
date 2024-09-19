'use client'
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'

type CounterProps = {
  start: number;
  end: number;
  duration: number;
  inView: boolean;
};

const Counter: React.FC<CounterProps> = ({ start, end, duration, inView }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, start, end, duration]);

  return <span>{count}</span>;
};

const Facts: React.FC = () => {
  const { ref: counterRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: counterRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: counterRef3, inView: inView3 } = useInView({ triggerOnce: true });

  return (
    <main className="relative flex sm:px-10 px-5 m-5 ">
        {/* TEXT & COUNTER CONTAINER */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* TEXT CONTAINER */}
      <div className="flex flex-col justify-center">
          <h1 className="mb-10 font-bold text-2xl">Why <span className="underline underline-offset-8 decoration-yellow-400 decoration-4 ">work with us ?</span></h1>
          <p>Every day, compassionate individuals like you choose 
            [Charity Organization Name] to make a difference in the 
            lives of orphaned children. What sets us apart isn&apos;t just our proven track record and dedication to creating a brighter future. It&apos;s our unwavering commitment to providing each child with personalized care, support, and the opportunity to thrive.
            </p>
        </div>
        {/* COUNTER CONTAINER */}
        <div className="bg-slate-100 p-3 lg:p-6  rounded-lg">
          <h1 className="mb-8 font-bold text-2xl text-center">Currently</h1>
          <dl className="grid grid-cols-3 gap-4 text-center md:grid-cols-1 md:gap-8">
            <div className="mx-auto flex max-w-sm flex-col gap-y-4">
              <dt className="text-sm md:text-base leading-5  lg:leading-7 text-yellow-500 font-semibold">Estimated number of orphans</dt>
              <dd className="order-first text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 ">
                <div ref={counterRef1}>
                  <Counter start={0} end={4} duration={400} inView={inView1} />million
                </div>
              </dd>
            </div>
            <div className="mx-auto flex max-w-sm flex-col gap-y-4">
              <dt className="text-sm md:text-base leading-5 lg:leading-7 text-yellow-500 font-semibold">Are orphaned by HIV/AIDS</dt>
              <dd className="order-first text-xl md:text-2xl lg:text-3xl  font-semibold tracking-tight text-gray-900 ">
                <div ref={counterRef2}>
                  <Counter start={0} end={50} duration={1000} inView={inView2} />%
                </div>
              </dd>
            </div>
            <div className="mx-auto flex max-w-sm flex-col gap-y-4">
              <dt className="text-sm md:text-base leading-5 lg:leading-7 text-yellow-500 font-semibold">Aren&apos;t educated</dt>
              <dd className="order-first text-xl md:text-2xl lg:text-3xl  font-semibold tracking-tight text-gray-900 ">
                <div ref={counterRef3}>
                  <Counter start={0} end={30} duration={1000} inView={inView3} />%
                </div>
              </dd>
            </div>
           
          </dl>
        </div>
      </div>
    
  </main>
  
  );
};

export default Facts;
