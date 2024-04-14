import React from 'react'
import {
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";


import "../index.css"
function Goals() {
  return (
    <div className='p-6'>
        <div>
            <h1 className='text-center text-2xl py-8 font-bold'>What are your goals?</h1>
            <div className='bg-gray-200 p-3 my-4 rounded-xl flex justify-between'>
                <h2 className='pt-1 text-lg pl-2'>Weight Loss</h2>
                <Checkbox color="blue" />
            </div>
            <div className='bg-gray-200 p-3 my-4 rounded-xl flex justify-between'>
                <h2 className='pt-1 text-lg pl-2'>Muscle Gain</h2>
                <Checkbox color="blue" />
            </div>
            <div className='bg-gray-200 p-3 my-4 rounded-xl flex justify-between'>
                <h2 className='pt-1 text-lg pl-2'>Flexibility & Mobility</h2>
                <Checkbox color="blue" />
            </div>
            <div className='bg-gray-200 p-3 my-4 rounded-xl flex justify-between'>
                <h2 className='pt-1 text-lg pl-2'>General FItness</h2>
                <Checkbox color="blue" />
            </div>
            <div className='bg-gray-200 p-3 my-4 rounded-xl flex justify-between'>
                <h2 className='pt-1 text-lg pl-2'>Event - specific training</h2>
                <Checkbox color="blue" />
            </div>
            <div className='bg-gray-200 p-3 my-4 rounded-xl flex justify-between'>
                <h2 className='pt-1 text-lg pl-2'>Mindfulness and Mental Health</h2>
                <Checkbox color="blue" />
            </div>
        </div>

        <Link to="/tracker">
        
        <Button className='btn-2 w-full py-4 mt-40 text-lg'>confirm</Button>
        </Link>
    </div>
  )
}

export default Goals
