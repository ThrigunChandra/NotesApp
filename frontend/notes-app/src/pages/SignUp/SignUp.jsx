import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import {validateEmail} from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'

const SignUp = function() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name")
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter valid email address")
      return;
    }
    if (!password) {
      setError("Please enter the password")
      return;
    }
    setError('')

    // Signup call
    try{
      const response = await axiosInstance.post("/create-account", {
        name: name,
        email: email,
        password: password,
      })

      if(response.data && response.data.error){
        setError(response.data.message)
        return 
      }
      if(response.data && response.data.accessToken){
        localStorage.setItem("token", response.data.accessToken)
        navigate('/dashboard')
      }
    }catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
      }
      else{
        setError("An unexpected error occcured. Please try again.");
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white py-10 px-7'>
          <form onSubmit={handleSignUp}>
          <h4 className='text-2xl mb-7'>SignUp</h4>
            <input 
              type="text" 
              placeholder='Enter your Name'
              className='input-box'
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              />

            <input 
              type="text" 
              placeholder='Enter your Email'
              className='input-box'
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              />
            <PasswordInput 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
            <button type="submit" className='btn-primary'>
              Create account
            </button>

            <p className='text-sm text-center mt-4'>
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-[var(--primary)] underline">
                Login to existing account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp