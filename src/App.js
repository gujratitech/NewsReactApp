import React, { Component,useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const[progress,setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API
const setProgresss=()=>{
  setProgress(progress)

 }

    return (
    <>
    <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route exact path='/' element={<News setProgress ={setProgress} apiKey={apiKey} key="general" pageSize={20} category="general"/>}></Route>
          <Route exact path='/business' element={<News setProgress ={setProgress} apiKey={apiKey} key="business" pageSize={20} category="business"/>}></Route>
          <Route exact path='entertainment' element={<News setProgress ={setProgress} apiKey={apiKey} key="entertainment" pageSize={20} category="entertainment"/>}></Route>
          <Route exact path='health' element={<News setProgress ={setProgress} apiKey={apiKey} key="health" pageSize={20} category="health"/>}></Route>
          <Route exact path='science' element={<News setProgress ={setProgress} apiKey={apiKey} key="science" pageSize={20} category="science"/>}></Route>
          <Route exact path='sports' element={<News setProgress ={setProgress} apiKey={apiKey} key="sports" pageSize={20} category="sports"/>}></Route>
          <Route exact path='technology' element={<News setProgress ={setProgress} apiKey={apiKey} key="technology"pageSize={20} category="technology"/>}></Route>
          <Route exact path='nature' element={<News setProgress ={setProgress} apiKey={apiKey} key="nature" pageSize={20} category="nature"/>}></Route>

         
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
