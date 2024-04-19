import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { NavBarApp } from './components/NavBarApp'
import { ActualMoviesApp } from './pages/ActualMoviesApp'
import { BestMoviesApp } from './pages/BestMoviesApp'
import { NextMoviesApp } from './pages/NextMoviesApp'
import { DetailApp } from './components/DetailApp'
import { HomePage } from './pages/HomePage'
import "./App.css"

export const App = () => {
  
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <NavBarApp/>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/mejores-peliculas' element={<BestMoviesApp/>}></Route>
        <Route path='/cartelera' element={<ActualMoviesApp/>}></Route>
        <Route path='/estrenos' element={<NextMoviesApp/>}></Route>
      </Routes>
    </>
  )
}
export default App;