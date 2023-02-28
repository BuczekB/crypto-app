import { Box, Grid, Container, Typography} from '@mui/material';


export const NoMatchPage = () =>{
    return(
        <Container  sx={{display: 'flex',flexDirection:'column', justifyContent: 'center', width:'70%'}}>
           <Typography variant='h2' component='h1' fontWeight={600}>Can't Find That Coin </Typography>
        </Container>
    )
}