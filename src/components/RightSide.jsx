import React from 'react'

export const RightSide = () => {
  return (
    <div className='max-w-[220px]'>
        <div className='mb-2 rounded-md border border-gray-300 p-2 '>
            <div className='flex justify-between '><span className="font-bold text-gray-600 text-md">Add to your feed</span> <img src="/images/feed-icon.svg" alt="" /></div>
            <div className="my-3">
                <div className="flex mb-2 gap-3 items-center">
                    <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" className='w-[50px]' alt="" />
                    <div className="">
                        <div>#Linkedin </div>
                        <button className='rounded-2xl font-bold text-blue-600 border-2 border-blue-600 p-1 px-2'>Follow</button>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" className='w-[50px]' alt="" />
                    <div className="">
                        <div>#Video </div>
                        <button className='rounded-2xl font-bold text-blue-600 border-2 border-blue-600 p-1 px-2'>Follow</button>
                    </div>
                </div>
            </div>
            <button className='text-blue-600 flex gap-1 items-center '>View all recomendation <img src="/images/right-icon.svg" alt="" /></button>
        </div>
        <div className='rounded-md border border-gray-300 p-2'>
            <img src="/images/banner-image.jpg" alt="" />
        </div>
    </div>
  )
}
