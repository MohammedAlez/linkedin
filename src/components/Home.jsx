import React from 'react'
import { Link } from 'react-router-dom'
import { LeftSide } from './LeftSide'
import { Main } from './Main'
import { RightSide } from './RightSide'

export const Home = () => {
  return (
    <div>
      {/* section */}
      <div className="mx-auto w-fit flex gap-1 font-medium py-6 flex-col lg:flex-row items-center">
        <Link to="" className='text-blue-600'>Hiring in a hurry? - </Link>
        <p className='text-center'>Find talented pros in record time with upwork and keep business moving.</p>
      </div>
      {/* layout */}
      <div className='flex flex-col lg:flex-row gap-6 '>
        <LeftSide />
        <Main />
        <RightSide />
      </div>
    </div>
  )
}
