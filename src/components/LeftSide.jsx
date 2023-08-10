import React from "react";
import { useSelector } from "react-redux"


export const LeftSide = () => {
    const user = useSelector(state=>state.userState);
    // console.log(user)
  return (
    <div className='min-w-[220px]'>
        <div className='mb-2 rounded-md border border-gray-300 '>
            <div className=''>
                <div className="">
                    <img src="" className="h-[60px] bg-gray-300 w-full" alt="" />
                    <img src={user?.user?.photoURL} className="rounded-full h-[60px] mx-auto mt-[-30px]" alt="" />
                </div>
                <div className="p-3">
                    <div> Welcome, <span className="font-bold">{user?.user?.displayName}</span></div>
                    <div className="text-sm font-medium text-blue-600 cursor-pointer text-center">Add photo</div>
                </div>
            </div>
            <div className='  py-3 border-y border-y-gray-300 '>
                <div className='hover:bg-gray-200 px-2 flex items-center justify-between'>
                    <div>
                        <span className='block font-bold text-[13px]  text-gray-600'>Connections</span>
                        <span className='block font-bold text-[13px] '>Grow your network</span>
                    </div>
                    <img src="/images/widget-icon.svg" alt="" />
                    </div>
            </div>
            <div className='p-2 hover:bg-gray-200 flex gap-2'>
                <img src="/images/item-icon.svg" alt="" />
                <span className="block text-[13px] font-bold">My Items</span>
            </div>  
        </div>
        <div className='rounded-md border border-gray-300 '>
            <div className="flex flex-col gap-2 p-2 px-3">
                <span className="hover:text-blue-600 text-[12px] font-bold">Groups</span>
                <span className="hover:text-blue-600 text-[12px] font-bold">Events</span>
                <span className="hover:text-blue-600 text-[12px] font-bold">Follow Hashtag</span>
            </div>
            <div className="border-t hover:bg-gray-200 p-2 text-sm font-medium text-gray-600">
                Discouver more
            </div>
        </div>
    </div>
  )
}
