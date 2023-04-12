import * as React from 'react';
import {Shantell_Sans } from 'next/font/google';
const roboto = Shantell_Sans({weight:['300', '400'], subsets:['latin']})
const timeline = [
  {
    time: "4:30 - 5:00pm",
    activity: "Arrive and dress up"
  },
  {
    time: "5:00 - 6:00pm",
    activity: "Photo shotting & Theme crafts"
  },
  {
    time: "6:00 - 7:00pm",
    activity: "Dinner & Cake time"
  },
  {
    time: "7:00 - 8:00pm",
    activity: "Princess theme craft & Party games"
  },
  {
    time: "8:00 - 8:30",
    activity: "Relaxing"
  }
]

const Schedule = () => {
  return (
    <>
     <h2 className="text-2xl my-5">Schedule</h2>
     <div className={`${roboto.className} flex flex-col items-start text-left`}>
      {timeline.map((thing, i) =>
       <li key={i} className="my-2">
         <span className="font-bold">{thing.time}</span>
         <div className="font-thin ml-14 mt-0">{thing.activity}</div>
       </li>
      )}
     </div>
    </>
  )
}


export default Schedule;