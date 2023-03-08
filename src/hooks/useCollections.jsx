import {useState,useEffect} from 'react'
import { collection, onSnapshot,db } from '../firebase/config'

export function useCollections(collect) {
    const [list, setList]=useState(null)
    const [error, setError]=useState(null)
    useEffect(()=>{
        onSnapshot(collection(db,collect),(data)=>{
            const results=[]
            data.docs.forEach((doc)=>{
                results.push({...doc.data(),id:doc.id})
            })
            setError(null)
            setList(results);
        })
    },[])


    return {list}
}

