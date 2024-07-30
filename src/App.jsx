import './tailwind.css'
import Homepage from './Pages/Homepage'
import MainLayout from './Layouts/MainLayout'
import AddSlipsPage from './Pages/AddSlipsPage'
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage'
import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { auth } from './Components/firebase'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => auth.onAuthStateChanged((user) => {
    setUser(user)
  }))
  const router = createBrowserRouter( 
    createRoutesFromElements(
      <>
        <Route path='/' element={ user ? <MainLayout /> : <Navigate to='/signin' /> }>
          <Route index element={ <Homepage /> } />
          <Route path='addSlip' element={ <AddSlipsPage />} />
        </Route>
        <Route path='/signup' element={ <SignUpPage /> } />
        <Route path='/signin' element={ <SignInPage /> } />
      </>

    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
