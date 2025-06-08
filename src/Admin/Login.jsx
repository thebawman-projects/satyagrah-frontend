import React, {useState} from 'react'
import { useAuth } from '../Auth/AuthContext';
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import sankalplogo from '../images/sankalp.png'

export default function Login() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const {login} = useAuth()

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {email, password} = data
    try {
      const {data: response} = await axios.post('/login', {
        email,
        password
      })
      if(response.error){
        toast.error(response.error)
      }else{
        setData({});
        login();
        navigate('/dashboard')
        toast.success(`Logged In Successfully`);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img 
            className="h-20 w-auto transition-transform hover:scale-105" 
            src={sankalplogo} 
            alt="Logo" 
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          Please enter your credentials to login
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl py-8 px-6 sm:px-10">
          <form className="space-y-6" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={data.email} 
                  onChange={(e) => setData({ ...data, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/80"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={data.password} 
                  onChange={(e) => setData({ ...data, password: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3.5 text-white/50 hover:text-white transition-colors"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <AiOutlineEyeInvisible size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-white/80"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <FiLogIn className="mr-2" />
                    Sign In
                  </>
                )}
              </button>
            </div>

            <div className="text-center text-sm text-white/60">
              Don't have an account?{' '}
              <span className="font-medium text-blue-400 hover:text-blue-300 cursor-pointer">
                Contact Admin
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
