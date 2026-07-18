//mui modules
import ImageList from '@mui/material/ImageList';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//custom modules
import { NavBar } from '@/modules/assets/AppBar';
import { Loginform } from '@/modules/auth/LoginBox'

export default function LoginPage(){
    return(
        <html>
            <head/>
                <body>
                    <NavBar/>
                            <Container maxWidth="xl" disableGutters sx={{ display:"flex",alignItems: "center",  justifyContent: "space-between", gap: 20}}>
                                <ImageList cols={5} variant="quilted" sx={{ width: '60vw', height: '70vh', borderRadius: 3, overflow: 'hidden' }}>
                                <ImageListItem cols={2} rows={1}>
                                    <img src="/photos/random_wallpaper.png"></img>
                                </ImageListItem>
                                <ImageListItem rows={2} cols={3}>
                                    <img src="/photos/random_wallpaper2.png"></img>
                                </ImageListItem>
                                <ImageListItem rows={1} cols={1}>
                                    <img src="/photos/random_wallpaper2.png"></img>
                                </ImageListItem>
                                <ImageListItem rows={1} cols={1}>
                                    <img src="/photos/random_wallpaper.png"></img>
                                </ImageListItem>
                                </ImageList>
                                
                                <Loginform/>
                            </Container>
                </body>
        </html>
    )
}