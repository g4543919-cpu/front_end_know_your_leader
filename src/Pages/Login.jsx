import React from 'react'
import { LoginForm } from '../components/login-form'

const Login = () => {
  return (

    <div className="min-h-screen flex justify-center items-center">
  <div className='w-full sm:w-[90vw] sm:h-[500px] flex justify-center items-center p-6'>
    <LoginForm />
  </div>
</div>
  )
}

export default Login