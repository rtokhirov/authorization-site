import { useState } from "react"
import {auth,signInWithEmailAndPassword} from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

function useLogin() {
    const[isPending,setIspending]=useState(false)
    const[error,setError]=useState(null)
    const{dispatch}=useAuthContext()

    const login= async(email,password) => {
        setIspending(true)
        setError(null)
        try{
            const res = signInWithEmailAndPassword(auth,email,password)
            dispatch({type:"SIGNIN",payload: res.user})
            console.log(res);
            setError(null)

        }catch(err){
            setError(err.message)
            console.log(err.message);
        }finally{
            setIspending(false)
        }
    }
    return {isPending,error,login}
}

export default useLogin