import { auth, db, provider, storage } from "../../firebase"
import {signInWithPopup} from 'firebase/auth'
import * as actions from './actions'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore"


export const signInApi=()=>{
    
    return async (dispatch)=>{
        // console.log("hello")
        try{
            const payload = await signInWithPopup(auth, provider)
            // console.log(payload)
            dispatch(actions.setUser(payload.user))
        }catch(error){
            alert(error.message)
        }
    }
}
export const signOutApi=()=>{
    return async (dispatch)=>{
        // console.log("hello")
        try{
            await auth.signOut()
            // console.log(payload)
            dispatch(actions.setUser(null))
        }catch(error){
            alert(error.message)
        }
    }
}

export const getUserAuth=()=>{ 
    return (dispatch)=>{
        auth.onAuthStateChanged(async(user)=>{
            // console.log(user)
            if(user){
                dispatch(actions.setUser(user))
            }
            
        })
    }
}

export const postArticleApi=(payload)=>{
    return (dispatch)=>{
        // console.log(actions.setLoading(true))
        if(payload.image){
            dispatch(actions.setLoading(true));
            const storageRef = ref(storage, `images/${payload.image.name}`)
            const uploadRef = uploadBytesResumable(storageRef, payload.image)
            uploadRef.on('state_changed',(snapshot)=>{
                    console.log(snapshot)
            },(e)=>{
                console.log(e)
            },()=>{
                getDownloadURL(uploadRef.snapshot.ref).then((downloadURL)=>{
                    const collRef = collection(db, 'articles');
                    // console.log(payload.time)
                    addDoc(collRef, {
                        actor:{
                            description:payload.user.user.email,
                            date:payload.timestamp,
                            title:payload.user.user.displayName,
                            photo:payload.user.user.photoURL
                        },
                        comments:0,
                        description:payload.description,
                        shareImg:downloadURL,
                        video:payload.video
                    })
                })
                dispatch(actions.setLoading(false));
            })
        }else{
            dispatch(actions.setLoading(true));
            const collRef = collection(db, 'articles');
                // console.log(payload.time)
                addDoc(collRef, {
                    actor:{
                        description:payload.user.user.email,
                        date:payload.timestamp,
                        title:payload.user.user.displayName,
                        photo:payload.user.user.photoURL
                    },
                    comments:0,
                    description:payload.description,
                    shareImg:'',
                    video:payload.video
                })
                dispatch(actions.setLoading(false));
        }
    }
}

export const getArticles=()=>{
    return (dispatch)=>{
        let payload;
        const collRef = collection(db, 'articles');
        const orderedRef = query(collRef, orderBy('actor.date', 'desc'));
        onSnapshot(orderedRef, (snapshot)=>{
            payload = snapshot.docs.map((doc)=>doc.data())
            dispatch(actions.getArticles(payload))
        })
    }
}