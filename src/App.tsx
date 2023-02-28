import { useState, useEffect} from 'react'
import './App.css'

import {GetData} from './features/getData/GetDataView'
import { MainIteamListBox } from './loyout/MainItemListBox'
import { SingleElement } from './loyout/SingleElement'
import {MenuComponent} from './loyout/MenuComponent'
import {SearchAppBar} from './loyout/SearchAppBar'
import {HomePage} from './loyout/HomePage'
import {ErrorPage} from './loyout/ErrorPage'
import {NoMatchPage} from './loyout/NoMatchPage'

import {useAppSelector, useAppDispatch} from './app/hooks'

import {Routes, Route, useNavigate} from 'react-router-dom'
import {  Box} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  const state = useAppSelector((state) => state.data.error)
  const navigate = useNavigate()

  useEffect(() =>{
    if(state.length > 1){
      console.log(state, 'error');
      navigate('errorPage')
     }
  },[state])
  

  return (
    <Box
     display='flex'
    flexDirection='column'
    >
      
     <Box display='flex' sx={{
      flexDirection:{xs:'column', lg:'row'}
     }} >
     <MenuComponent/>
      <Routes >
      <Route path='' element={<HomePage/>}/>
      <Route path='/crypto-app' element={<HomePage/>}/>
      <Route path='/errorPage' element={<ErrorPage/>}/>
      <Route path='/coins' element={<MainIteamListBox/>}/>
        <Route path='/coins/:Id' element={<MainIteamListBox/>}/>
        <Route path='singleElement/:Id' element={<SingleElement/>}/>
        <Route path='*' element={<NoMatchPage/>}/>
      </Routes>
     </Box>
       <GetData/>
       </Box>
  )
}

export default App
