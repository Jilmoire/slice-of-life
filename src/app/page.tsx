//mui modules
import ImageList from '@mui/material/ImageList';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

//custom modules
import { NavBar } from '@/modules/assets/AppBar';

export default function ButtonUsage() {
  return (
    <html>
      <head/>
        <body>
          <NavBar></NavBar>

          <Container>
            <ImageList>
              <ImageListItem>
                <img></img>
              </ImageListItem>
            </ImageList>

            <Typography>
              IMAGE DESCRIPTION OR SOMTHIN
            </Typography>

          </Container>


        </body>
    </html>
  );
}
