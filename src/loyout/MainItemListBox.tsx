import React from 'react'
import { useEffect } from 'react'
import {useAppSelector} from '../app/hooks'


export const MainIteamListBox = () =>{
const data = useAppSelector((state) => state.data)



  console.log(data);
  

    return (
        <div >
            
        </div>
      )
}