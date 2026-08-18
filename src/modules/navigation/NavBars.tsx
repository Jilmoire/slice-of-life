"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

export function WelcomeBar() {
    return(
        <AppBar>
            <Toolbar sx={{padding:'1.3rem'}}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2, ml: 3}}>
                    <MenuIcon />
                </IconButton>
                <Typography sx={{ flexGrow: '1'}}>Slice of Life</Typography>
                
                <Box sx={{ display: 'flex', gap: 3, mr: 4 }}>
                    <Typography>Plans</Typography>
                    <Typography>Services</Typography>
                    <Typography>About</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}