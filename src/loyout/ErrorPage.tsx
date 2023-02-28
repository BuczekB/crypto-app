import { Box, Grid, Container, Typography} from '@mui/material';


export const ErrorPage = () =>{
    return(
        <Container  sx={{display: 'flex',flexDirection:'column', justifyContent: 'center', width:'70%'}}>
           <Typography variant='h2' component='h1' fontWeight={600}>Error: </Typography>
           <Typography variant='h2' component='h1' fontWeight={600}>Can't Fetch Data From API </Typography>
           <Typography variant='h2' component='h1' fontWeight={600}>Try Later</Typography>
        </Container>
    )
}