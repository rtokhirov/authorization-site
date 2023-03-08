import {useReducer} from 'react'
import { useAuthContext } from './useAuthContext'
import {
    Timestamp,
    collection,
    addDoc,
    db,
    doc,
    updateDoc,
    deleteField,
    deleteDoc
} from '../firebase/config'



let initialState={
    document: null,
    isPending:false,
    success:false,
    error:null
}

const useInitialState =(state,action)=>{
    switch(action.type){
        case "IS_PENDING":
            return {...state, isPending:action.payload}
        case "ADD_DOCUMENT":
            return {document: action.payload, isPending:false,success:true,error:null}
        case "ERROR":
            return {document:null, isPending:false,success:false,error:action.payload}
        default:
            return state
        }
}

export function useFireStore(collect) {
    const {user}=useAuthContext()
    
    
    const [response,dispatch]=useReducer(useInitialState,initialState)
    
    const addDocument = async(data)=>{
        
        console.log(data);
        dispatch({type:"IS_PENDING",payload:true})
        
        const createdAt = Timestamp.fromDate(new Date())
        
        const docRef= await addDoc(collection(db,collect),{...data,createdAt})

        
        dispatch({type:"ADD_DOCUMENT",payload:docRef})

     
    }
    const deleteDocument = async(id) => {
        dispatch({type:"IS_PENDING",payload:true})
       
        await deleteDoc(doc(db, collect, id));
    }
    return {addDocument,deleteDocument,response}
}

