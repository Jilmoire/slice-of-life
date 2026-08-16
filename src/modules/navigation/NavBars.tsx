import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export function WelcomeBar() {
    return(
        <AppBar sx={{padding:'1.5rem'}}>
            <Box>icon - - - label</Box>
            <Box> option   option   option  </Box>
        </AppBar>
    )
}