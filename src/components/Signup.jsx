import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'


function Signup() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
            
        }
    }
  return (
    <div className='bg-[#0f172a] flex items-center justify-center min-h-screen text-white'>
        <div class="bg-[#1e293b] p-8 rounded-2xl shadow-xl w-full max-w-sm">
    <h2 class="text-2xl font-bold mb-6 text-center text-white">Create an Account</h2>
    
    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    <form onSubmit={handleSubmit(create)} class="space-y-5">
      {/* <!-- Name --> */}
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          class="w-full mt-1 px-4 py-2 bg-[#334155] border border-gray-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your name"
            {...register("name", { required: true })}
        />
      </div>

      {/* <!-- Email --> */}
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          class="w-full mt-1 px-4 py-2 bg-[#334155] border border-gray-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="you@example.com"
          {...register("email", { 
                required: true,
                validate: {
                            matchPatern: (value)  => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address"
                        }
            })}
        />
      </div>

      {/* <!-- Password --> */}
      <div>
        <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          required
          class="w-full mt-1 px-4 py-2 bg-[#334155] border border-gray-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="••••••••"
            {...register("password", { required: true })}
        />
      </div>

      {/* <!-- Submit --> */}
      <button
        type="submit"
        class="w-full bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 transition duration-200"
      >
        Sign Up
      </button>
    </form>

    <p class="mt-4 text-center text-sm text-gray-400">
      Already have an account?
      <Link to="/login" class="text-purple-400 hover:underline">Log in</Link>
    </p>
  </div>
    </div>
  )
}

export default Signup