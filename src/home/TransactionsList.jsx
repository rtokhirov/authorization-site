import React from 'react'
import { useFireStore } from '../hooks/useFireStore'
import { useAuthContext } from '../hooks/useAuthContext'
function TransactionsList({list}) {
  const {user}=useAuthContext()
  const {deleteDocument}=useFireStore(user.email)
    // deleteDocument('das')
  return (
    <div>
        {list.map((item)=>{
            return(
            <div 
              key={item.name} 
              className='border-emerald-400 border-l-4 px-2 py-1 texr-lg max-w-sm mb-3 bg-zinc-200 flex justify-between'
              onClick={()=>{deleteDocument(item.id)}}
              >
                <h1>{item.name}</h1>
                <h2>${item.amount}</h2>
                {/* <p>{item.id}</p> */}
            </div>)
        })}
    </div>
  )
}

export default TransactionsList