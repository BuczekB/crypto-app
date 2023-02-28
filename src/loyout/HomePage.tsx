import {useAppSelector} from '../app/hooks'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import ListItem from '@mui/material/ListItem/ListItem';
import { display } from '@mui/system';
import {ErrorPage} from './ErrorPage'

export const HomePage = () =>{

const data = useAppSelector((state) => state.data)
const navigate = useNavigate()




const biggerstCrypto = data.data.slice(0,9)
console.log(data.error, 'testerror');


const listOfBiggestCrypto = biggerstCrypto.map((singleItem) =>{



    return(
    <Grid onClick={() => navigate(`singleElement/${singleItem.id}`)} xs={12} sm={8} md={3} spacing={3} my={2} mx={5}  item key={singleItem.id}>
        <Card sx={{display:'flex', flexDirection: 'column', alignItems:'center' }}>
        <CardMedia
  component="img"
  sx={{width:'24%',
  paddingTop: '10px',}}
  image={singleItem.image}
  alt={singleItem.id}
/>
          <CardContent>
          <Typography gutterBottom variant='h6' component='div' textTransform='uppercase'>
          {singleItem.id}
            </Typography>
            <Typography gutterBottom variant='h6' component='div'>
            Current Price: {singleItem.current_price} 
            </Typography>
            <Typography variant='body2' color='text.senoundary'>
            Market Cap: {singleItem.market_cap}
            </Typography>
          </CardContent>
        </Card>
    </Grid>
    )
    
})


    return(
     <Box  sx={{ minHeight: '100vh', width:'100%',display:'flex'}}>
      {data.error.length < 2?
       <Box position='relative' sx={{height: 'auto', minHeight: '100vh', width:'100%',display:'flex',flexDirection:'column'}}>
       <Typography gutterBottom variant='h3' my={1} component="h1" fontWeight='bold' mx={1}>
        Biggest Crypto Coins
        </Typography>
       <Box >
       <Grid container display='flex' justifyContent='center' >
            {listOfBiggestCrypto}
         </Grid>
       </Box>
       </Box>:
       <ErrorPage></ErrorPage>}
     </Box>
       
    )
}