import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostModal from './PostModal'
import { getArticles } from '../redux/actions/index'
import ReactPlayer from 'react-player'

export const Main = () => {
    const user = useSelector(state => state.userState)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.articlesState.loadingState)
    const articles = useSelector(state => state.articlesState.articles)
    const [modal,setModal] = useState(false);
    const handleClick=()=>{
        setModal(!modal);
    }
    useEffect(()=>{
        dispatch(getArticles())
    },[])
    // console.log(loading)
  return (
    <div className='flex-1 '>
        {/* shareBox */}
        <div className=" rounded-md border border-gray-300 p-2 px-4 mb-3">
            <div className="flex gap-2">
                <img src={user?.user?.photoURL} className='rounded-full w-[40px]' alt="" />
                <div onClick={handleClick} className='rounded-2xl p-2 border border-gray-200 flex-1 font-medium hover:bg-gray-100 transition cursor-pointer'>Share a post</div>
            </div>
            <div className="mt-3 flex justify-between  sm:px-10">
                <div className='cursor-pointer flex gap-1  items-center p-2 hover:bg-gray-200 transition rounded-md'>
                    <img src="/images/photo-icon.svg" alt="" />
                    <span className='text-blue-500 font-medium text-[14px]'>Photo</span>
                </div>
                <div className='cursor-pointer flex gap-1  items-center p-2 hover:bg-gray-200 transition rounded-md'>
                    <img src="/images/video-icon.svg" alt="" />
                    <span className='text-blue-500 font-medium text-[14px]'>Video</span>
                </div>
                <div className='cursor-pointer flex gap-1  items-center p-2 hover:bg-gray-200 transition rounded-md'>
                    <img src="/images/event-icon.svg" alt="" />
                    <span className='text-blue-500 font-medium text-[14px]'>Event</span>
                </div>
                <div className='cursor-pointer flex gap-1  items-center p-2 hover:bg-gray-200 transition rounded-md'>
                    <img src="/images/article-icon.svg" alt="" />
                    <span className='text-blue-500 font-medium text-[14px]'>Article</span>
                </div>
            </div>
        </div>
        {/* content */}
        <div className="">
            {articles.length===0 && <p className='rounded-md border border-gray-300 p-2 px-4 mt-3'>There s no Posts</p>}
            {loading && <img src='/images/loader.svg' className='w-[60px] mx-auto' alt=''/>}
            {articles.length>0 && <div className=''>
                {articles.map((ele,index)=>
                    <div className='rounded-md border border-gray-300 p-2 px mb-3' key={index}>
                        <div className='flex gap-3 items-center'>
                            <img src={ele.actor.photo} alt="" className='rounded-full w-[40px] ' />
                            <div className='flex flex-col justify-center'>
                                <span className='font-bold'>{ele.actor.title}</span>
                                <span className='text-[13px] text-gray-400'>{ele.actor.description}</span>
                                {/* <span className='text-[13px] text-gray-400'>{new Date(ele.actor.date.nanoseconds)}</span> */}
                            </div>
                        </div>
                        <div className="">
                            {ele.description && <p className='my-2'>{ele.description}</p>}
                            {ele.shareImg && <img src={ele.shareImg} alt='' />}
                            {ele.video && <ReactPlayer width={"100%"} url={ele.video} />}
                        </div>
                        <div className="flex gap-1 items-center border-b border-gray-300 py-2">
                            <div className='flex'>
                                <img className='w-[25px]' src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss" alt="" />
                                <img className='w-[25px]' src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49" alt="" />75
                            </div>
                            <span className='text-sm font-medium'>0 comments</span>
                            <span className='text-sm font-medium'>1 share</span>
                        </div>
                        <div className="flex sm:gap-2 gap-1 justify-center mt-1">
                            <button className="p-3 flex gap-1 sm:gap-2 w-[25%] items-center justify-center hover:bg-gray-200 transition rounded-md">
                                <img src="/images/like-icon.svg" className='sm:w-[24px] w-[15px]' alt="" />
                                <span className='text-[12px] sm:text-sm md:text-md font-bold text-gray-500'>Like</span>
                            </button>
                            <button className="p-3 flex gap-1 sm:gap-2 w-[24%] items-center justify-center hover:bg-gray-200 transition rounded-md">
                                <img src="/images/comment-icon.svg" className='sm:w-[24px] w-[15px]' alt="" />
                                <span className='text-[12px] sm:text-sm md:text-md font-bold text-gray-500'>Comment</span>
                            </button>
                            <button className="p-3 flex gap-1 sm:gap-2 w-[24%] items-center justify-center hover:bg-gray-200 transition rounded-md">
                                <img src="/images/share-icon.svg" className='sm:w-[24px] w-[15px]' alt="" />
                                <span className='text-[12px] sm:text-sm md:text-md font-bold text-gray-500'>Share</span>
                            </button>
                            <button className="p-3 flex gap-1 sm:gap-2 w-[24%] items-center justify-center hover:bg-gray-200 transition rounded-md">
                                <img src="/images/send-icon.svg" className='sm:w-[24px] w-[15px]' alt="" />
                                <span className='text-[12px] sm:text-sm md:text-md font-bold text-gray-500'>Send</span>
                            </button>
                        </div>
                    </div>
                )}     
            </div>}
        </div>

        {/* postModal */}
        <PostModal modal={modal} handleClick={handleClick}/>

    </div>
  )
}
