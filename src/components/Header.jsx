import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signOutApi } from '../redux/actions';

export const Header = () => {
    const [isFocus,setIsFocus] = useState(false);
    const user = useSelector(state=>state.userState)
    const dispatch = useDispatch();
    const [signout,setSignout] = useState(false);
    // console.log(user);
    useEffect(()=>{
        const f = ()=>{
            if(window.innerWidth >= 800) 
                setIsFocus(false)
        }
        window.addEventListener("resize",f)
        return window.addEventListener('resize',f);
    },[])
  return (
    <div className='py-1 flex items-center justify-between'>
        {/* logo and search*/}
        
            <div  className='w-full flex gap-1 items-center'>
                <img src="/images/linkedin.png"  alt="" className='min-w-[30px] sm:w-[35px] max-w-[35px] p-1  '/>
                <div onClick={()=>{if(window.innerWidth <= 800) setIsFocus(true)}} className={`relative z-[111] flex items-center gap-3  ${isFocus ? "bg-blue-100 w-full" : 'bg-transparent'} md:bg-blue-100 p-2 px-2 rounded-md`}>
                    <img className={`min-w-[20px] md:min-w-[17px]`}  src="/images/search-icon.svg" alt="" />
                    <input style={{display: window.innerWidth >= 768 ? "block" : (isFocus  ? "block" : "hidden")}} type="text" className={` hidden h-full bg-transparent w-full outline-none transition`} placeholder='Search...'/>
                </div>
            </div>
        
        {/* links */}
        {<nav className={`gap-1 sm:gap-2 ${(isFocus ? "hidden" : "flex")}`}>
            <Link to="" className='sm:px-4 px-2 border-b-2 border-b-gray-900 p-1 flex flex-col items-center justify-center '>
                <img src="/images/nav-home.svg" className='min-w-[17px] sm:min-w-[20px]   ' alt="" />
                <p className='hidden md:block font-medium text-sm'>Home</p>
            </Link>
            <Link to="" className='sm:px-4 px-2  p-1 flex flex-col items-center justify-center '>
                <img src="/images/nav-network.svg" className='min-w-[17px] sm:min-w-[20px]   ' alt="" />
                <p className='hidden md:block font-medium text-sm'>Home</p>
            </Link>
            <Link to="" className='sm:px-4 px-2  p-1 flex flex-col items-center justify-center '>
                <img src="/images/nav-jobs.svg" className='min-w-[17px] sm:min-w-[20px]   ' alt="" />
                <p className='hidden md:block font-medium text-sm'>Home</p>
            </Link>
            <Link to="" className='sm:px-4 px-2  p-1 flex flex-col items-center justify-center t'>
                <img src="/images/nav-messaging.svg" className='min-w-[17px] sm:min-w-[20px]   ' alt="" />
                <p className='hidden md:block font-medium text-sm'>Home</p>
            </Link>
            <Link to="" className='sm:px-4 px-2  p-1 flex flex-col items-center justify-center '>
                <img src="/images/nav-notifications.svg" className='min-w-[17px] sm:min-w-[20px]   ' alt="" />
                <p className='hidden md:block font-medium text-sm'>Home</p>
            </Link>
            <div onClick={()=>setSignout(!signout)} to="" className='relative cursor-pointer sm:px-1 px-2 w-[57px] p-1 flex flex-col items-center justify-center '>
                <img src={user?.user?.photoURL} className='min-w-[17px] sm:min-w-[20px] w-[25px] h-[25px] rounded-full   bg-red-500' alt="" />
                <p className='hidden  font-bold text-sm md:flex gap-1'>Me <img src="/images/down-icon.svg" alt="" /></p>
                {signout && <button className='p-2 bg-red-600 transition text-white font-medium absolute py-1 bottom-[-35px] rounded-md hover:bg-red-500 right-0' onClick={()=>dispatch(signOutApi())}>SignOut</button>}
            </div>
            <div className='hidden md:flex px-4 w-[57px]  p-1  flex-col items-center justify-center'>
                <img src="/images/nav-work.svg" alt="" />
                <div className='hidden  font-bold text-sm md:flex gap-1 min-w-fit'>Work <img src="/images/down-icon.svg" alt="" /></div>
            </div>
            
        </nav>}
        {isFocus && <div onClick={()=>setIsFocus(false)} className='fixed h-full w-full bg-black opacity-25 top-0 left-0'></div>}
    </div>
  )
}
