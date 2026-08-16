import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export function LoginSignup() {
  return (
    <Box sx={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '17vw', height: '50vh', padding: '2rem', textAlign:'center'}}>
      <Typography> Let's get you in</Typography>
      <Box sx={{display:'flex', flexDirection: 'column', gap:'2rem'}}>
        <TextField id="uname-login" label="email/username" variant="filled"/>
        <TextField id="passwd-login" label="password" variant="filled"/>
      </Box>
      <Button variant="contained">Sign in or Register</Button>
    </Box>
  );
}
