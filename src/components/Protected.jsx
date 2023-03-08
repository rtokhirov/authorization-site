import React from 'react'
import {Navigate} from 'react-router-dom'

function Protected({isSignedIn,children}) {
    if(!isSignedIn){
        return <Navigate to='/login' replace/>
    }
    
    return children
}

function ProtectedOne({isSignedIn,children}) {
    if(isSignedIn){
        return <Navigate to='/' replace/>
    }
    
    return children
}

export {Protected,ProtectedOne}