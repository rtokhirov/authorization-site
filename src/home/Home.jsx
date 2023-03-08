import React from 'react'
import Transactions from './transactions'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollections } from '../hooks/useCollections'
import TransactionsList from './TransactionsList'

export default function Home() {
  const {user}=useAuthContext()
  const {list }=useCollections(user.email)

 
  return (
    <div className='flex justify-between w-full gap-1'>
      <div className='w-1/2'>
        {list && <TransactionsList list={list}/>}
      </div>
      <div className='w-1/2 max-w-xs'>
        {user && <Transactions user={user}/>} 
      </div>
    </div>
  )
}

// export {user}