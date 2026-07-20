import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Avatar, IconButton } from '@mui/material';

export function Loginform(){
    return(
        <Box sx={{display:"flex", flexDirection:"column", border:"solid", padding:5, alignContent: "center"}}>
            <Typography align="center" variant="h6">
                Organize and Cherish your Memories
            </Typography>
            <Typography sx={{padding:1}}>
                LOG IN / SIGN UP
            </Typography>
                                    
            <Box sx={{display:"flex", padding:2, flexDirection:"column"}}>
                <TextField id="userLogin" label="username/email" variant="outlined"/>
                <TextField id="userLogin" label="password" variant="outlined"/>
            </Box>
            <Button id="submitLogin "variant="contained" sx={{padding:1}}>Submit</Button>
        </Box>
    );
}

export function Logintoggle(){
    return(
        <Box>
            <IconButton>
                <Avatar>
                    
                </Avatar>
            </IconButton>
        </Box>
    );
}