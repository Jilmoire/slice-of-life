//mui components
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';


//mui icons
import CollectionsIcon from '@mui/icons-material/Collections';


export function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="false">
      <Toolbar>
        <IconButton>
          <CollectionsIcon/> 
        </IconButton>
        <Typography>
          <Link href='#' color='textPrimary' underline='none'>Slice of Life</Link>
        </Typography>

        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="#">
            Sign In
          </Link>
          <Link underline="hover" color="inherit" href="#">
            About
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Create an Account
          </Link>
        </Breadcrumbs>

      </Toolbar>
      </Container>
    </AppBar>
    );
}