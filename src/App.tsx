import { useState } from 'react'
import './App.css'

import {GetData} from './features/getData/GetDataView'
import { MainIteamListBox } from './loyout/MainItemListBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <MainIteamListBox/>
       <GetData/>
    </div>
  )
}

export default App
