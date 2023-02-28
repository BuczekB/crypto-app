import { AppBar, Toolbar, IconButton, Typography, Stack, Button ,MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import InboxIcon from '@mui/icons-material/Inbox';
import MenuList from '@mui/material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const MenuComponent = ( ) =>{

    const navigate = useNavigate()

    const goHome = () =>{
        navigate('/')
    }


    const goCoins = () =>{
        navigate('/coins')
    }

    const goMore = () =>{
        navigate('/')
    }

    return(
        <Box position='relative' sx={{ width:'100%', maxWidth: {xs:'100%', sm:'100%', md:'100%', lg:'360px'}, height: 'auto', minHeight: {xs:'5vh', lg:'100vh'}, bgcolor: 'primary.main', color: 'white'}}>
      <nav aria-label="main mailbox folders">
        <List sx={{position: {xs:'relative',sm:'relative', md:'relative', lg:'fixed'} , width: '100%', maxWidth: 360, display:'flex',  flexDirection:{xs:'row',sm:'row', md:'row', lg:'column'}}}>
          <ListItem sx={{width:"100%" }} disablePadding>
            <ListItemButton  onClick={goHome}>
              <ListItemIcon >
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText sx={{fontSize: '48px'}} primary="Home" />
            </ListItemButton >
          </ListItem >
          <ListItem disablePadding>
            <ListItemButton onClick={goCoins}>
              <ListItemIcon>
                <AttachMoneyIcon/>
              </ListItemIcon>
              <ListItemText primary="Coins" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemIcon>
                <MoreHorizIcon/>
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
          </ListItem>
        </List>
        </nav>
    </Box>
    )

}

