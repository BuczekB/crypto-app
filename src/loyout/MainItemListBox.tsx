import React from 'react'
import { useEffect, useState } from 'react'
import { Box , Button, List, ListItem, ListItemIcon, ListItemText, Pagination, Typography, Autocomplete, TextField, ListItemButton     } from '@mui/material'
import {useAppSelector, useAppDispatch} from '../app/hooks'
import { fetchData} from '../features/getData/getdata'

import { Link, useNavigate, useParams } from 'react-router-dom'

import {PaginationBox} from './PaginationBox'
import {ErrorPage} from './ErrorPage'

export type Data = {
    id: string,
    symbol:string,
    name:string,
    image:string,
    current_price:number,
    market_cap:number,
    market_cap_rank:number,
    fully_diluted_valuation:number,
    total_volume:number,
    high_24h:number,
    low_24h:number,
    price_change_24h:number,
    price_change_percentage_24h:number,
    market_cap_change_24h:number,
    market_cap_change_percentage_24h:number,
    circulating_supply:number,
    total_supply:number,
    max_supply:number,
    ath:number,
    ath_change_percentage:number,
    ath_date:string,
    atl:number,
    atl_change_percentage:number,
    atl_date:string,
    roi:null,
    last_updated:string,
}


export const MainIteamListBox = () =>{

const [page, setPage] = useState<number>(1)
const [serchCoin, setSearchCoin] = useState<string | null>()

const [sortedData, setSortedData] = useState<Data[] | undefined>()
const [printedList, setPrintedList] = useState<JSX.Element[]  >()
const [firstRun, setFirstRun] = useState(false)
const [flag, setFlag] = useState(false)

const data = useAppSelector((state) => state.data)
const dispatch = useAppDispatch()

const ofData = data.data.map((item) =>{
    return{
       item
    }
})

const navigate = useNavigate()
const params = useParams()
const id = params.Id

const searchNames = data.data.map((item) => {
    return  item.id
})






const sortCoins = ( action :string) =>{
    switch(action){
        case 'Standard':
            console.log('workss');
            
            setSortedData(data.data)
            
            setFirstRun(true)
            break;
        case 'PriceLow':
            const priceLow = [...data.data].sort(function(a,b){
                return a.current_price - b.current_price
            })
            setSortedData(priceLow)
           
            setFlag(true)
            break;
        case 'PriceHigh':
            break;   
        default:
        
        
    }

    
}




useEffect(() =>{

    if(serchCoin){
        navigate( `/singleElement/${serchCoin}`)
    }
 
 },[serchCoin])


useEffect(() =>{

   if(id == '1'){
    setPage(1)
    dispatch(fetchData(1))
    
   }

},[page])


  

        const listItems = data.data.map((item) =>{

            let greenOrRed = ''
          
            
            if(item.price_change_percentage_24h > 0){
                greenOrRed = 'green'
            }
            else{
                greenOrRed = 'red'
            }
            
           const id = `/singleElement/${item.id}`
           
    
           return(
            <Link key={item.id} to={id}>
                <ListItem  sx={{
                    display: 'flex',
                    border: 'solid 1px black',
                    marginBottom: '8px',
                    color: 'black',
                    width:{xs: '92vw',sm: '95vw', md:'95vw',lg:'75vw'}
                }}>
            <ListItemText sx={{
                   width: '10vw'
                }}>
                     <Typography  fontWeight={600} > {item.name}</Typography>
            </ListItemText>
            <ListItemText >
            <Typography  fontWeight={600} >{item.current_price?` ${item.current_price} $`: 'no Data' }</Typography>
            </ListItemText>
            <ListItemText  sx={{
                color: greenOrRed,
            }}>
                {item.price_change_percentage_24h? `${item.price_change_percentage_24h} %`: 'no Data'} 
            </ListItemText>
            <ListItemIcon sx={{
                width: '50px',
                height: '50px'
            }}>
                <img src={item.image}></img>
            </ListItemIcon>
            </ListItem>
            </Link>
           )
    
           
    
        })
    
       
        
        

    
  
    const paginationId = (event: React.ChangeEvent<unknown>, page:number) =>{
        setPage(page) 
        dispatch(fetchData(page))
        navigate(`/coins/${page}`)


      }
      
    return (
        <Box sx={{ minHeight: '100vh', width:'100%',display:'flex'}}>
            {data.error.length < 2? 
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width:{xs: '92vw',sm: '95vw', md:'95vw',lg:'75vw'},
                height: 'auto',
                margin: '10px 10px',
            }} >
                <Typography variant='h4' mb={3} mt={2} fontWeight={700}  >List Of Crypto</Typography>
                <Autocomplete sx={{mb:'20px', width:{xs: '92vw',sm: '95vw', md:'95vw',lg:'75vw'}}} options={searchNames} renderInput={(params) => <TextField {...params} label='Name of crypto...' />}
                onChange={(event:any , newValue:string | null ) => setSearchCoin(newValue)}  />
                <ListItem sx={{
                    border: 'solid 1px black',
                    marginBottom: '10px'
                }}>
            
            <ListItemText >
            <Typography  component='span' fontWeight={900} >Coin</Typography>
            </ListItemText>
            
              
            <ListItemText>
            <Typography  fontWeight={900} >Price</Typography>
            </ListItemText>
           
            <ListItemText >
            <Typography  fontWeight={900}  >24H</Typography>
            </ListItemText>
           
            </ListItem>
               <List>
                {listItems}
               </List>
               <PaginationBox  page={page}  paginationId = {paginationId}   />
            </Box>:
            <ErrorPage></ErrorPage>}
        </Box>
      )
}