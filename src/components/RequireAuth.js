import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const RequireAuth = ({children}) => {
    const navigate = useNavigate();
    const user = useSelector(state=>state.userState)
    // console.log(user.user);
    useEffect(()=>{
        if(!user.user){
        navigate('/',{replace:true})
    }},[user.user])
    return children 
}
