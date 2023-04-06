import React, { Component,useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state={
    progress:0
  }
 setProgress=(progress)=>{
  this.setProgress({progress:progress})

 }
  render() {
    return (
    <>
    <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
          <Route exact path='/' element={<News setProgress ={this.setProgress} key="general" pageSize={20} category="general"/>}></Route>
          <Route exact path='/business' element={<News setProgress ={this.setProgress} key="business" pageSize={20} category="business"/>}></Route>
          <Route exact path='entertainment' element={<News setProgress ={this.setProgress} key="entertainment" pageSize={20} category="entertainment"/>}></Route>
          <Route exact path='health' element={<News setProgress ={this.setProgress} key="health" pageSize={20} category="health"/>}></Route>
          <Route exact path='science' element={<News setProgress ={this.setProgress} key="science" pageSize={20} category="science"/>}></Route>
          <Route exact path='sports' element={<News setProgress ={this.setProgress} key="sports" pageSize={20} category="sports"/>}></Route>
          <Route exact path='technology' element={<News setProgress ={this.setProgress} key="technology"pageSize={20} category="technology"/>}></Route>
          <Route exact path='nature' element={<News setProgress ={this.setProgress} key="nature" pageSize={20} category="nature"/>}></Route>

         
        </Routes>
    </BrowserRouter>
    </>
    )
  }
}

export default App
