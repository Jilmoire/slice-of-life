import Button from '@mui/material/Button';
import {LoginSignup} from '@/modules/auth/LoginBox';
import {WelcomeBar} from '@/modules/navigation/NavBars'

export default function Landing() {
  return (
    <>
    <WelcomeBar/>
    <LoginSignup/>
    </>
  );
}
