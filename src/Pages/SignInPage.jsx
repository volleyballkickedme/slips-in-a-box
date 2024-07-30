import React from 'react'
import SignupSignin from '../Components/SignupSignin'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Components/firebase'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //to navigate to other pages
    const navigate = useNavigate()

    //function to handle login submission
    const handleSubmission = async (e) => {
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        }
        catch(error) {
            console.log(error.message)
        }
    }
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center bg-indigo-800'>
        <div className='flex flex-col gap-7 bg-indigo-300 items-center justify-center w-1/2 h-3/4 rounded-lg'>
            <SignupSignin />
            <form onSubmit={ handleSubmission }>
                <div>
                    <label>Email</label>
                    <input type='email' 
                        required 
                        className='m-3'
                        value={ email } onChange={ (event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password'
                        required
                        className='m-3'
                        value={ password } onChange={ (event) => setPassword(event.target.value)} />
                </div>
                <button type='submit' className='bg-gray-200 p-1 rounded-md'>Log In</button>   
            </form>          
        </div>
    </div>
  )
}

export default SignInPage