import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

import {useAppSelector} from '../app/hooks'
import { Box, List, ListItem, ListItemText, Button, Typography, createTheme, ThemeProvider } from '@mui/material'



type Item ={
    additional_notices: [],
    asset_platform_id: string,
    block_time_in_minutes: number,
    categories: string[],
    coingecko_rank: number,
    coingecko_score: number,
    community_data: {},
    community_score: number,
    contract_address: string,
    country_origin: string,
    description: {},
    detail_platforms: {},
    developer_data: {},
    developer_score : number,
    genesis_date: null,
    hashing_algorithm: null,
    id: string,
    image: {
        large: string,
        small: string,
        thumb: string,

    },
    last_updated: string,
    links: {},
    liquidity_score: number,
    localization: {},
    market_cap_rank: number,
    market_data: {},
    name: string,
    platforms: {},
    public_interest_score: number,
    public_interest_stats: {},
    public_notice: null,
    sentiment_votes_down_percentage   : number,
    sentiment_votes_up_percentage: number,
    status_updates: [],
    symbol: "busd",
    tickers: {}[],
    
}




export const SingleElement = () =>{

    const [item, setItem] = useState<Item | undefined>();
    const data = useAppSelector((state) => state.data)
    
    const params = useParams()
    const id = params.Id

    const navigate = useNavigate()

    const theme = createTheme()

    theme.typography.h5 = {
            fontWeight: '900',
            fontSize:'20px',
            textAlign: 'center'     
    }
    

    const fetchSingleElement = () => axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then((res) => {
    setItem(res.data) 
  
    
  })
  .catch(err =>{
    console.log(err.message);
    
  })

  const selectedItem = data.data.filter((item) =>item.id === id)

  const slectedItemReady = selectedItem[0] 
  
  
  
  

    useEffect(() =>{

        fetchSingleElement()

    },[])

   if(item){
    
   }

   const goBack = () =>{
     navigate(-1)
   }

    return(
        <Box display='flex' width='100%' height='100vh' justifyContent='center' alignItems='center'>
            <ThemeProvider theme={theme}>
            <Box>
           <Box>
           <img src={item? item.image.large : ''}></img>
           </Box>
           <List sx={{
            display: 'flex'
           }}>
            <ListItem sx={{
                flexDirection: 'column',
                flexWrap: 'nowrap',
                width: 'auto'

            }}>
                <ListItemText> 
                    <Typography variant='h5' >
                    {slectedItemReady.market_cap? `Market Cap: ${slectedItemReady.market_cap} $`:'Market Cap: no Data'}
                    </Typography>
                </ListItemText>
                <ListItemText >
                <Typography variant='h5' >
               {slectedItemReady.market_cap_change_24h? ` 24 Hour Trading Vol: ${slectedItemReady.market_cap_change_24h} $`:  '24 Hour Trading Vol: no Data'}
               </Typography>
                </ListItemText>
                <ListItemText>
                <Typography variant='h5' >
                {slectedItemReady.market_cap? `Market Cap: ${slectedItemReady.market_cap} $`: 'Market Cap: no Data'}
               </Typography>
                </ListItemText>
            </ListItem>
            <ListItem sx={{
                flexDirection: 'column',
                flexWrap: 'nowrap',
                width: 'auto'
            }}>
                <ListItemText>
                <Typography variant='h5' >
                {slectedItemReady.circulating_supply? `Circulating Supply: ${slectedItemReady.circulating_supply} $`: 'Circulating Supply: no Data'}
               </Typography>
                </ListItemText>
                <ListItemText>
                <Typography variant='h5' >
                Total Supply: {slectedItemReady.total_supply? slectedItemReady.total_supply: 'Infinity'} 
               </Typography>
                </ListItemText>
                <ListItemText>
                <Typography variant='h5' >
                Max Supply: {slectedItemReady.max_supply? slectedItemReady.max_supply: 'Infinity'} 
               </Typography>
                </ListItemText>
            </ListItem>
           </List>
           <Button size='large'  variant="outlined"
        sx={{
        }
        }
        onClick={() => {
            goBack()
        }} >
            BACk
        </Button>
        </Box>
        </ThemeProvider>
        </Box>
    )
}


