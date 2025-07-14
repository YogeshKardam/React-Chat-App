import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";



function Login() {
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            console.log("userData", session)
            if (session){
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
    <div class="bg-[#0f172a] flex items-center justify-center min-h-screen text-white">
      <div class="bg-[#1e293b] p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 class="text-2xl font-bold mb-6 text-center text-white">
          Login to Your Account 
        </h2>
        {error && <p className='text-red-600 mt-8 text-center'></p>}
        <form onSubmit={handleSubmit(login)} class="space-y-5">
          {/* <!-- Email Input --> */}
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">
              Email
            </label>
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

          {/* <!-- Password Input --> */}
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 px-4 py-2 bg-[#334155] border border-gray-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
                {...register("password", {required: true})}
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="w-full bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 transition duration-200"
          >
            Log In
          </button>
        </form>

        <p class="mt-4 text-center text-sm text-gray-400">
          Don't have an account?
          <Link to="/signup" class="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
