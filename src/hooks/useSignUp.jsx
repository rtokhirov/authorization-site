import { useState } from "react"
import {auth,createUserWithEmailAndPassword,updateProfile} from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

function useSignUp() {
    const[isPending,setIspending]=useState(false)
    const[error,setError]=useState(null)
    const{dispatch}=useAuthContext()
    
    const signup= async(displayName,email,password) => {
        console.log(displayName,email,password);
        setIspending(true)
        setError(null)
        try{
            const res= await createUserWithEmailAndPassword(auth,email,password)
            if(!res){
                throw new Error("Could not complete sign up")
            }
            
            await updateProfile(auth.currentUser,{displayName})

            dispatch({type:"SIGNIN",payload:res.user})
            console.log(res);
            setError(null)

        }catch(err){
            setError(err.message)
            console.log(err.message);
        }finally{
            setIspending(false)
        }
    }
    return {isPending,error,signup}
}

export default useSignUp