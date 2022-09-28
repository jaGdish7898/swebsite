
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { showSideBarAtom ,showRegisterLoginAtom} from '../../../recoil-states/recoil-atoms';
import { useSetRecoilState } from 'recoil';
import { SideBar } from '../../organism/organism-export';
import { Login } from '../../molecules/molecule-export';

export default function NavBar({}) {

 
  const setShowSideBar = useSetRecoilState(showSideBarAtom)
  const setShowRegisterLoginAtom = useSetRecoilState(showRegisterLoginAtom)
  
  function openSideBar (){
    setShowSideBar(true)

  }
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon  onClick = {openSideBar}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontSize:20}}>
            Menu
          </Typography>
          <Button color="inherit" onClick={()=>setShowRegisterLoginAtom(true)}> 
              <PersonIcon
                color="white"
                fontSize = 'medium'
                sx = {{mr : 1}}
              /> 
              <Typography  sx={{ flexGrow: 1 ,fontSize:20}}>
              Admin Login

              </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <SideBar/>
      <Login/>
    </Box>
  );
}
