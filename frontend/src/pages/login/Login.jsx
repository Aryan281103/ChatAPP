import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js'

function Login() {

    const[username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    const {loading,login}= useLogin()

    const handleSubmit= async (e)=>{
        e.preventDefault();
        await login(username, password)

    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
            <h1 className="text-3xl font-semibold text-center text-gray-800">LogIn
            <span className='text-blue-700'>ChatApp</span>
            </h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-800'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
                     value={username} 
                     onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-gray-800'>Password</span>
                    </label>
                    <input type='password'
                    placeholder='Enter Password'
                    className='w-full input input-bordered h-10'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <button className='btn btn-block btn-sm mt-2 '
                    disabled={loading}>
                      {loading ?  <span className='loading loading-spinner'></span> :"Login"}
                    </button>
                </div>

                <Link to='/signup' className='text-sm text-gray-800 hover:undline hover:text-red-600 mt-2 inline-block'>{"Don't"} have an account?</Link>

            </form>
        </div>


    </div>
  )
}

export default Login

// import React from 'react'

// function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
//             <h1 className="text-3xl font-semibold text-center text-gray-800">LogIn
//             <span className='text-blue-700'>ChatApp</span>
//             </h1>
//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-gray-800'>Username</span>
//                     </label>
//                     <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text text-gray-800'>Password</span>
//                     </label>
//                     <input type='password'
//                     placeholder='Enter Password'
//                     className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 '>LogIn</button>
//                 </div>

//                 <a href='#'className='text-sm text-gray-800 hover:undline hover:text-red-600 mt-2 inline-block'>{"Don't"} have an account?</a>

//             </form>
//         </div>


//     </div>
//   )
// }

// export default Login