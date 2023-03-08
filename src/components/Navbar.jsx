import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import useLogout from '../hooks/useLogout'

function Navbar() {
  const {user}=useAuthContext()
  // console.log("nav user:",user);
  const{logout}=useLogout()
  return (
    <div className='bg-emerald-200 py-1 px-2 '>
        <div className='max-w-5xl mx-auto flex items-center justify-between py-3'>
                <Link to="/"><h1 className='text-3xl'>myMoney</h1></Link>
            <nav className='flex items-center gap-4'>
                {!user && <>
                  <Link to='/login'>Login</Link>
                  <Link to='/signup'>Sign Up</Link>
                </>}
                {user && <span>Hello, {user.displayName}</span> }
                {user && <button onClick={logout} className='font-bold text-red-500 border-2 px-3 py-1 rounded border-red-500 hover:bg-red-500 hover:text-black'>Log out</button>}
            </nav>
        </div>
        
    </div>
  )
}

export default Navbar