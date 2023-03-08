import React,{useState} from "react";
import useSignUp from "../hooks/useSignUp";

function Signup() {
  const[info,setInfo]=useState({
    displayName:"",
    email:"",
    password:""
  })
  const handleSubmit =(e)=>{
    e.preventDefault()
    signup(info.displayName,info.email,info.password);
  }

  const {error,isPending,signup}=useSignUp()
  // console.log(signup);

  return (
    <div className="max-w-md mx-auto px-2">
      <h1 className="mb-10 text-3xl font-bold">Singup</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">display name</span>
          <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="display name"
          required
          onChange={(e)=>{
            setInfo({...info,displayName:e.target.value})
          }}
        />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">email name</span>
          <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="email"
          required
          onChange={(e)=>{
            setInfo({...info,email:e.target.value})
          }}
        />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">password</span>
          <input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          required
          onChange={(e)=>{
            setInfo({...info,password:e.target.value})
          }}
        />
        </label>
        {!isPending && <button className="border-2 px-3 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white" type="submit">Signup</button>}
        {isPending && <button className="border-2 px-3 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white" type="submit" disabled>Loading...</button>}
        {error && <div>{error}</div> }
      </form>
    </div>
  );
}

export default Signup;