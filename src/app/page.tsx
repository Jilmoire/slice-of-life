import Button from '@mui/material/Button'
import {LoginSignup} from '@/modules/auth/LoginBox'
import {WelcomeBar} from '@/modules/navigation/NavBars'
import {ImgFilter} from '@/modules/gallery/FilterOptions'


export default function Landing() {
  return (
    <>
    <WelcomeBar/>
    <LoginSignup/>
    <ImgFilter/>
    </>
  );
}
