import './tailwind.css'
import Homepage from './Pages/Homepage'
import MainLayout from './Layouts/MainLayout'
import AddSlipsPage from './Pages/AddSlipsPage'
import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
function App() {
  const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout />}>
        <Route index element={ <Homepage />} />
        <Route path='addSlip' element={ <AddSlipsPage />} />
      </Route>

    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
