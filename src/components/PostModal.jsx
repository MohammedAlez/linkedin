import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  ReactPlayer from 'react-player'
import { Timestamp } from 'firebase/firestore';
import { postArticleApi } from '../redux/actions';


const PostModal = ({modal,handleClick}) => {
    // console.log(modal)
    const dispatch = useDispatch();
    const user = useSelector(state => state.userState);
    const [text,setText] = useState("");
    const [mediaType,setMediaType] = useState("");
    const [image,setImage] = useState(null);
    const [video,setVideo] = useState("");
    const reset=()=>{
        setImage(null);
        setMediaType("");
        setVideo("");
        setText("")
        handleClick();
    }
    const handleImage=(e)=>{
        const image = e.target.files[0]
        if(image === undefined || image === ''){
            alert("error");
            return 
        }
        setImage(image);

    }
    const postArticle=()=>{
        // console.log(user.user.email)
        const payload= {
            user:user,
            timestamp:Timestamp.now(),
            video:video,
            image:image,
            description:text
        }
        dispatch(postArticleApi(payload))
        reset()
    }
  return (
    <>
        {modal!==false && <div>
            <div className="fixed w-full h-full bg-black opacity-40 top-0 left-0"></div>
            <div className="p-3 w-full sm:w-[600px] fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-white rounded-md border border-gray-200">
                <div className="flex justify-between items-center border-b border-b-gray-300 py-2">
                    <span className='block text-gray-700 font-bold'>Create a post</span>
                    <button className='hover:bg-gray-300 transition text-xl h-[30px] w-[30px] rounded-full flex justify-center items-center' onClick={reset}>X</button>
                </div>
                <div className="py-3 overflow-auto">
                    <div className="flex items-center gap-3 ml-4">
                        <img src={user?.user?.photoURL} className='rounded-full w-[35px] h-[35px] ' alt="" />
                        <span className='font-bold'>{user?.user?.displayName}</span>
                    </div>
                    <textarea value={text} onChange={(e)=>setText(e.target.value)} className='p-3 my-4 w-full max-h-[150px] outline-none resize-none' placeholder='What do you want to talk about?'></textarea>
                    {mediaType === 'image' && <div className=''>
                        <label className='text-center'>
                            <span className='block cursor-pointer hover:text-gray-500 mx-auto font-bold'>Select an image</span>
                            <input  type="file" onChange={handleImage} className='hidden'/>
                        </label>
                        {image && <img src={URL.createObjectURL(image)} alt="" />}
                    </div>}
                    {mediaType === 'video' && <div className=''>
                    {/* <label className='text-center'> */}
                            {/* <span className='block cursor-pointer mx-auto font-bold hover:text-gray-500'>Select a video</span> */}
                            <input value={video} onChange={(e)=>setVideo(e.target.value)} type="text"  className='outline-none p-2 border rounded-md w-full' placeholder='Enter the video Link' />
                        {/* </label> */}
                        {video && <ReactPlayer width={"100%"} url={video} />}
                    </div>}
                </div>
                <div className='flex justify-between items-center '>
                    <div className='flex gap-2 '>
                        <button onClick={()=>setMediaType("image")} className='p-2 rounded-full hover:bg-gray-200 transition'><img src="/images/share-image.svg" alt="" /></button>
                        <button onClick={()=>setMediaType("video")} className='p-2 rounded-full hover:bg-gray-200 transition'><img src="/images/share-video.svg" alt="" /></button>
                        <div>
                            <div className='p-2 px-4 flex items-center gap-1 border-l border-l-gray-300'>
                                <img src="/images/share-comment.svg" alt="" /> Anyone
                            </div>
                        </div>
                    </div>
                    <button onClick={postArticle} disabled={!text ? true : false} className={`${!text ? "bg-gray-200" : "bg-blue-600 text-white"} p-2 px-3 rounded-xl  font-bold `}>Post</button>
                </div>
            </div>
                
        </div>}
    </>
  )
}

export default PostModal