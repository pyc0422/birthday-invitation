"use client";
import Image from 'next/image'
import {useState} from 'react';
import Guest from './Guest';
import Schedule from './Schedule';
import {Shantell_Sans } from 'next/font/google';
import { motion } from 'framer-motion';
const sans = Shantell_Sans({weight:'400', subsets:['latin']});

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-center">
      <header className="border-b sticky bg-white min-w-full top-0 inset-x-0 z-50 font-mono">
        <nav className="flex justify-center">
          {["Home", "Join", "Schedule"].map((n, i) =>
            <a
             key={i}
             href={`#${n.toLowerCase()}`}
             className="flex place-items-center gap-2 p-8 hover:underline hover:font-semibold"
            >
              {n}
             </a>
            )}
        </nav>
        </header>
      <div id="home" className={`${sans.className} min-h-screen min-w-full`}>
        <div className="mt-20">
        <motion.div initial={{opacity:'0%', x:'-200'}} animate={{opacity:'100%', x:0}} transition={{duration:1}}>
          <h1 className='text-5xl mb-3 text-pink-400'> You are invited!</h1>
        </motion.div>
        <motion.div initial={{opacity:'0%', x:'800'}} animate={{opacity:'100%', x:0}} transition={{duration:1}}>
          <div className="ml-18">
            <span className="text-4xl text-pink-300">{`Olivia's `}</span>
            <span className="text-6xl text-bold  text-pink-600">6</span>
            <span  className="text-2xl text-pink-300">th birthday party </span>
            <span className="text-2xl text-pink-600">@ April 28th</span></div>
        </motion.div>

        <motion.div initial={{opacity:'0%', y:400}}animate={{opacity: '100%', y:0}} transition={{delay:0.5, duration:1}}>
            <Image src="/olivia.png" alt="picture of olivia" width={500} height={500} className="float-right -mt-8 mr-[5%] md:mr-[30%] "/>
          </motion.div>
        </div>

      </div>
      <div id="join" className="min-h-screen mt-20 pt-24">
        <Guest />
      </div>
      <div id="schedule" className="min-h-[90vh] pt-14">
        <Schedule />

      </div>
      <div id="footer" className="b-0 text-center w-full text-xs text-gray-500">
        {'Copyright © Yuchen '}{new Date().getFullYear()}
      </div>

    </main>
  )
}
