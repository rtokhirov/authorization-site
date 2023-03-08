import { createContext,useEffect,useReducer } from "react";
import { auth,onAuthStateChanged} from "../firebase/config";

export const AuthContext=createContext()

const authReducer =(state,action)=>{
    switch(action.type){
        case "SIGNIN":
            return {...state,user:action.payload}
        case "AUTH_CHANGE":
            return {...state,user:action.payload,onAuthChange:true}
        case "LOGOUT":
            return {...state,user:null}
        default:
            return state
    }
}

export const AuthContextProvider=({children})=>{
    const[state,dispatch]=useReducer(authReducer,{
        user:null,
        onAuthChange:false
    })

    useEffect(()=>{ 
        onAuthStateChanged(auth,(user)=>{
            dispatch({type:"AUTH_CHANGE",payload:user})
        })
    },[])

    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
