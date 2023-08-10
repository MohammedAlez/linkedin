import { Link, useNavigate } from "react-router-dom"
import { connect, useSelector, useDispatch } from "react-redux"
import { signInApi } from "../redux/actions"
import { useEffect } from "react"



const Login = () => {
    // console.log(props.user?.user)
    const user = useSelector(state=>state.userState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(user);
    useEffect(()=>{
        (user.user!==null && navigate('/home'))
    },[user.user])
    return (
        <>
            {/* header */}
            <div className='flex justify-between p-4'>
                <div className="w-28">
                    <img src="/images/login-logo.svg" alt="" />
                </div>
                <nav className=" flex gap-4">
                    <Link to='' className="p-2 rounded-lg hover:bg-gray-200 transition font-medium">Joing Now</Link>
                    <Link to='' className="p-2 border rounded-3xl border-blue-600  px-4 text-blue-600 font-bold hover:bg-blue-100 transition">Sign in</Link>
                </nav>
            </div>
            <div className="">
                <div className="p-4 mx-10  lg:flex justify-between relative">
                    <div className="mb-8">
                        <h1 className='sm:text-3xl text-xl  p-2 font-bold lg:mt-28 lg:text-left text-center mb-8 text-blue-600'>Welcome to your professional community</h1>
                    </div>
                    <img className="mx-auto md:w-[500px] mb-8" src="/images/login-hero.svg" alt="" />
                    <button 
                        className="lg:absolute top-[50%] left-8 mx-auto flex gap-2 items-center px-6 p-3 border text-blue-950  border-blue-950 rounded-xl transition font-bold hover:bg-blue-950 hover:text-white"
                        onClick={()=>dispatch(signInApi())}
                    >
                        <img className="" src="/images/google.svg" alt="" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    return {
        user: state.userState.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signIn: ()=>dispatch(signInApi()),
    }
}

export default Login