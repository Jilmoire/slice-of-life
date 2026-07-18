//mui components
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';

//mui icons
import CollectionsIcon from '@mui/icons-material/Collections';


export function NavBar() {
  return (
    <Box>
    <AppBar position="static">
      <Container maxWidth={false}>
      <Toolbar sx={{justifyContent: "space-between"}}>
        <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
          <IconButton>
            <CollectionsIcon/> 
          </IconButton>
          <Typography variant="h6">
            <Link href="#" color="textPrimary" underline="none">Slice of Life</Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/login">
              Sign In
            </Link>
            <Link underline="hover" color="inherit" href="#">
              About
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Create an Account
            </Link>
          </Breadcrumbs>
        </Box>

      </Toolbar>
      </Container>
    </AppBar>
    </Box>
    );
}

export function DashNav(){
  return(
    <Box>
    <AppBar position="static">
        <Container maxWidth={false}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
            <IconButton>
              <CollectionsIcon/> 
            </IconButton>
            <Typography variant="h6">
              <Link href="#" color="textPrimary" underline="none">Slice of Life</Link>
            </Typography>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}