import React , {useState} from 'react'
import { useAuth } from '../Auth/AuthContext';
import axios from 'axios'
import './Admin.css'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import sankalplogo from '../images/sankalp.png'


export default function Login  ()  {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
})
const {login} = useAuth()
const loginUser = async (e) => {
  e.preventDefault();
  const {email, password} = data
  try {
    const {data} = await axios.post('/login', {
      email,
      password
    })
    if(data.error){
      toast.error(data.error)
    }else{
      setData({});
      login();
      navigate('/dashboard')
      toast.success(`Logged In Succesfully`);
      
    }
  } catch (error) {
    console.log(error)
  }
}
  return (
<div className="min-h-screen bg-slate-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
<div className="sm:mx-auto sm:w-full sm:max-w-md">
<img className="object-cover h-20 pl-28 mt-[-2rem] md:mt-0 " src={sankalplogo} alt="Logo" />
  <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
    Login to your account
  </h2>
</div>
<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form className="space-y-6" onSubmit={loginUser}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1 relative">
          <input
            type={visible ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            required
            value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {visible ? (
            <AiOutlineEye
              className="absolute right-2 top-2 cursor-pointer"
              size={25}
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute right-2 top-2 cursor-pointer"
              size={25}
              onClick={() => setVisible(true)}
            />
          )}
        </div>
      </div>
      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center`}>
          <input
            type="checkbox"
            name="remember-me"
            id="remember-me"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
      <div className={`flex items-center w-full`}>
        <h4>Not have any account? Contact Admin</h4>
      </div>
    </form>
  </div>
</div>
</div>
  )
}
