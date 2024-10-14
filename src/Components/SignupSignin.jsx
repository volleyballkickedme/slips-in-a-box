import React from 'react'
import { NavLink } from 'react-router-dom'

const SignupSignin = () => {
  return (
    <div className='flex gap-5 text-xl font-bold text-stone-50'>
        <NavLink to='/'>Sign Up</NavLink>
        <NavLink to='/signin'>Login</NavLink>
    </div>
  )
}

export default SignupSignin