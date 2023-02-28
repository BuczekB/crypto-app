import React from 'react'
import { useEffect } from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { fetchData } from './getdata'

export const GetData = () =>{

   

const dispatch = useAppDispatch()




useEffect(()=>{
     dispatch(fetchData(1)) 
    
},[])

   

    return (
        <>
        </>
      )
}