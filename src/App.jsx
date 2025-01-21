import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import VideoCallingPage from './pages/Video-Calling'
import Roompage from './pages/room'
import "./style.scss"
import "../src/App.css"

import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/'>
      <Route  index element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>
    } />
      <Route  path='login' element={<Login/>} />
      <Route  path='register' element={<Register/>} />
      <Route  path='join-meetting' element={<VideoCallingPage/>} />

      <Route  path='/room/:roomId' element={<Roompage/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
