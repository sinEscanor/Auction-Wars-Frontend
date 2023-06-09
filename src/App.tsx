import { useState } from 'react'
import './App.css'
import Login from './component/pages/Login'
import AuctionRoom from './component/pages/AuctionRoom'
import Register from './component/pages/Register'
import PostAuctionPage from './component/pages/PostAuction'
import Home from './component/pages/Home'
import { GetAuctions } from './store/AuctionSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Navbar from './component/Navbar'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/auction/post' element={<PostAuctionPage/>}></Route>
        <Route path='/auction/:id' element={<AuctionRoom/>}></Route>
      </Route>
    </Route>
  ))

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(GetAuctions());
  },[])

  return (
    <div className=' text-white'>
    {/* <Home/> */}
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
