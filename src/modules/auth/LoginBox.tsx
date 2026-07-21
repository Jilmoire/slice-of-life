'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Avatar, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export function Loginform() {
const router = useRouter();

  // State for username, password, mode, and UI feedback
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Converts username to internal format for Supabase Auth
  const getInternalEmail = (user: string) => `${user.trim().toLowerCase()}@app.internal`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const internalEmail = getInternalEmail(username);

    try {
      if (isSignUp) {
        // --- SIGN UP ---
        const { error } = await supabase.auth.signUp({
          email: internalEmail,
          password: password,
          options: {
            data: { username: username.trim() },
          },
        });
        if (error) throw error;
      } else {
        // --- LOG IN ---
        const { error } = await supabase.auth.signInWithPassword({
          email: internalEmail,
          password: password,
        });
        if (error) throw error;
      }

      router.push('/dashboard');

    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
        borderRadius: 2,
        padding: 5,
        alignContent: 'center',
        bgcolor: 'background.paper',
        boxShadow: 3,
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" sx={{alignItems:"center"}}>
        Organize and Cherish your Memories
      </Typography>

      <Typography align="center" sx={{ padding: 1, fontWeight: 500, color: 'text.secondary' }}>
        {isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}
      </Typography>

      {/* Error notification banner */}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 1 }}>
          {errorMessage}
        </Alert>
      )}

      {/* Inputs */}
      <Box sx={{ display: 'flex', paddingY: 2, flexDirection: 'column', gap: 2 }}>
        <TextField
          id="userLogin"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
          autoCapitalize="none"
        />
        <TextField
          id="userPassword"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
      </Box>

      {/* Submit Button */}
      <Button
        id="submitLogin"
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{ padding: 1, mt: 1 }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : isSignUp ? (
          'Sign Up'
        ) : (
          'Submit'
        )}
      </Button>

      {/* Toggle between Login and Signup */}
      <Button
        variant="text"
        size="small"
        onClick={() => {
          setIsSignUp(!isSignUp);
          setErrorMessage(null);
        }}
        sx={{ mt: 1.5 }}
      >
        {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
      </Button>
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