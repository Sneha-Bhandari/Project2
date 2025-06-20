import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'


import Layout from './HOC/Layout'
import Recipies from './Pages/Recipes' 
import Home from './Pages/Home'
import News from './Pages/News'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

     <Routes>
       <Route element={<Layout/>}>
       <Route  path='/'  element={<Home/>}></Route>
       <Route path='/Recipes' element={<Recipies/>}></Route>
       <Route path='/Services' element={<Services/>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/News' element={<News/>}></Route>
       <Route path='/Contact' element={<Contact/>}></Route>
       </Route>
      

      /
     </Routes>
    </>
  )
}

export default App
