import { AppBar, Backdrop, IconButton, Toolbar, Tooltip } from '@mui/material'
import {green } from '../constants/color'
import { Box, Typography } from '@mui/material'
import React, { lazy, Suspense, useState } from 'react'
import {Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as  NotificationsIcon} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const SearchDialog = lazy(()=>import('../specific/Search'))
  const NotificationDialog = lazy(()=>import('../specific/Notification'))
  const NewGroupDialog = lazy(()=>import('../specific/NewGroup'))


  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState();
  const [isSearch, setIsSearch] = useState();
  const[isNewGroup, setIsNewGroup] = useState();
  const [isLogOut, setIsLogOut]= useState();
  const [isNotification, setIsNotification] = useState();
  const handleMobile = () => {
    setIsMobile((pre)=> !pre)   
  }
  const openSearch = () => {
    setIsSearch((pre)=> !pre)
  }
  const openNewGroup = () => {
    setIsNewGroup((pre)=> !pre)
  }
  const logoutHandler = () => {
    setIsLogOut((pre)=> !pre)
  }
  const NotificationHandler = ()=>{
    setIsNotification((pre)=> !pre)
  }
  const navigateToGroup = () => navigate('/groups')
  return (
 <>
 <Box sx={{ flexGrow: 1 }} height={"4rem"}>
    <AppBar position='static' sx={{bgcolor:green}}>
        <Toolbar>
            <Typography variant='h6'  sx={{ display: { xs: 'none', sm: 'block' }}}>Chatterbox</Typography>
            <Box sx={{ display: { xs: 'block', sm: 'none' }}}  ><IconButton color='inherit'size='large' onClick={handleMobile}>
              <MenuIcon></MenuIcon>
              </IconButton></Box>
              <Box sx={{ flexGrow: 1 }}>

             
              </Box>
              <Box>
               <IconBtn title="Search" icon={<SearchIcon/>} onClick={openSearch}/>
          
              <IconBtn title="New Group" icon={<AddIcon/> } onClick={openNewGroup}/>
              
              <IconBtn title="Groups" icon={<GroupIcon/>} onClick={navigateToGroup}/>
              
              <IconBtn title={"Notifications"} icon={<NotificationsIcon/>} onClick={NotificationHandler}/>

              <IconBtn title="Logout" icon={<LogoutIcon/>}  onClick={logoutHandler}/>
              </Box>
        </Toolbar>
    </AppBar> </Box>


{
isSearch && (

  <Suspense fallback={<Backdrop open/>}>
     <SearchDialog/>
     </Suspense>
)
}

{
  isNotification && (

    <Suspense fallback={<Backdrop open/>}>
       <NotificationDialog/>
       </Suspense>
  )
}

{
  isNewGroup && (

    <Suspense fallback={<Backdrop open/>}>
       <NewGroupDialog/>
       </Suspense>
  )
}


 

 </>
  )
}

const IconBtn = ({title,icon,onClick}) => {

  return (  
    <Tooltip title={title}>
        <IconButton color='inherit' size='large' onClick={onClick} sx={{":hover":{bgcolor:"grey"}}} >
          {icon}

        </IconButton>
</Tooltip>
  )
    
}
export default Header
