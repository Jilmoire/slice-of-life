//mui modules
import ImageList from '@mui/material/ImageList';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


//custom modules
import { NavBar } from '@/modules/assets/AppBar';

export default function ButtonUsage() {
  return (
    <html>
      <head/>
        <body>
          <NavBar></NavBar>

          <Box sx={{display: "flex"}}>
            <ImageList cols={2} sx={{ width: '75%', height: 'auto', borderRadius: 3, overflow: 'hidden' }}>
              <ImageListItem>
                <img src="/photos/random_wallpaper.png"></img>
                <img src="/photos/random_wallpaper2.png"></img>
              </ImageListItem>
            </ImageList>

            <Typography>
              IMAGE DESCRIPTION OR SOMTHIN
            </Typography>

          </Box>


        </body>
    </html>
  );
}
