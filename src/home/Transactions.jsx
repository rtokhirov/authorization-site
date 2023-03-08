import React,{useState,useEffect} from 'react'
import { useFireStore } from '../hooks/useFireStore'
function Transactions({ user }) {
    const [name,setName]= useState('')
    const [amount,setAmount]=useState('')
    const {addDocument,response} = useFireStore(user.email)
    // console.log(uid)
    const handleSubmit =(e)=>{
        e.preventDefault()
        addDocument({
            name,
            amount,
        });
    } 

    useEffect(() => {
      if(response.success){
        setName('')
        setAmount('')
      }
    }, [response])
    
  return (

    <div className='bg-emerald-300 p-3 rounded-xl'>
        <form onSubmit={handleSubmit}>
            <label className="block mb-4">
                <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Name: </span>
                <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
                />
            </label>
            <label className="block mb-4">
                <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Amount: </span>
                <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Amount"
                required
                onChange={(e)=>{setAmount(e.target.value)}}
                value={amount}
                />
            </label>
            <button className='border-2 px-3 py-1 rounded text-white border-white hover:bg-white hover:text-black'>Submit</button>
        </form>
    </div>
  )
}

export default Transactions