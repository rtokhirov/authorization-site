import { useState } from "react"
import {auth, signOut} from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

function useLogout() {
    const[isPending,setIspending]=useState(false)
    const[error,setError]=useState(null)
    const{dispatch}=useAuthContext()

    const logout= async() => {
        setIspending(true)
        setError(null)
        try{
            await signOut(auth)
            dispatch({type:"LOGOUT"})
            console.log(res);
            setError(null)

        }catch(err){
            setError(err.message)
            console.log(err.message);
        }finally{
            setIspending(false)
        }
    }
    return {isPending,error,logout}
}

export default useLogout