import React from 'react'
import { useState } from 'react'
import SignupSignin from '../Components/SignupSignin'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db} from '../Components/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    //function to register user to firebase
    //the createUserWithEmailAndPassword method stores the user profile in the auth object
    //the current user can then be accessed with auth.currentUser
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            if(user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: username,
                })
                navigate('/signin')
            }
        }
        catch (error) {
            console.log(error.message)
        }

    }

  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center bg-indigo-800'>
        <div className='flex flex-col gap-7 bg-indigo-300 items-center justify-center w-1/2 h-3/4 rounded-lg'>
        <SignupSignin />
        <form onSubmit={ handleRegister }>
            <div>
                <label>Username: </label>
                <input type='text'
                required
                value={ username } onChange={ (event) => setUsername(event.target.value) } />
            </div>
            <div>
                <label>Email</label>
                <input type='email' 
                required
                value={ email } onChange={ (event) => setEmail(event.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type='password'
                required
                value={ password } onChange={ (event) => setPassword(event.target.value)} />
            </div>   
            <button type='submit' className='bg-gray-200 p-1 rounded-md'>Sign Up</button>          
        </form>
        </div>
    </div>
  )
}

export default SignUpPage