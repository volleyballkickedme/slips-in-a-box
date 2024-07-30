import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from './firebase'

const Navbar = () => {
    const navigate = useNavigate()
    async function handleLogout() {
        try {
            await auth.signOut()
            navigate('/signin')
        }
        catch (error) {
            console.log(error.message)
        }
    }
  return (
    <nav className='bg-indigo-900'>
        <div className='flex h-20 justify-end'>
            <div className= 'flex justify-stretch items-center'>
                <NavLink to='/'
                className={({ isActive }) =>
                isActive
                    ? 'bg-indigo-700 text-white rounded-md px-3 py-2'
                    : 'hover:bg-indigo-600 text-white rounded-md px-3 py-2'}>Home</NavLink>
                <NavLink to='/addSlip'
                className={({ isActive }) =>
                    isActive
                        ? 'bg-indigo-700 text-white rounded-md px-3 py-2'
                        : 'hover:bg-indigo-600 rounded-md text-white px-3 py-2'}>Add</NavLink>
                <button onClick={ handleLogout } className='hover:bg-indigo-600 rounded-md text-white px-3 py-2'>Logout</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar