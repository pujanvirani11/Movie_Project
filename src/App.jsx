import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componets/Home'
import Layout from './Componets/Layout'
import Popular from './Componets/Popular'
import Upcoming from './Componets/Upcoming'
import Top_Rated from './Componets/Top_Rated'
import Now_Playing from './Componets/Now_Playing'
import Genres from './Componets/Genres'
import Contact from './Componets/Contact'
import Movie_Details from './Componets/Movie_Details'
import Movie_List from './Componets/Movie_List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Layout/></>}>
        <Route path='/' element={<><Home/></>} />
        <Route path='/Home' element={<><Home/></>} />
        <Route path='/Popular' element={<><Popular/></>} />
        <Route path='/Upcoming' element={<><Upcoming/></>} />
        <Route path='/Top_Rated' element={<><Top_Rated/></>} />
        <Route path='/Now_Playing' element={<><Now_Playing/></>} />
        <Route path='/Genres' element={<><Genres/></>} />
        <Route path='/Contact' element={<><Contact/></>} />
        <Route path='/Movie_Details/:id' element={<><Movie_Details/></>} />
        <Route path='/Movie_List/:id' element={<><Movie_List/></>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
