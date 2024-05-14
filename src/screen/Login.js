import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Button, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Login(props) {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Call API to submit login credentials
    console.log("Logging in with:", { email, password });
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password form or perform necessary action
    console.log("Forgot Password");
  };

  const handleCreateAccount = () => {
    // Navigate to create account form or perform necessary action
    console.log("Create Account");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" variant="body2" onClick={handleForgotPassword}>
              Forgot Password?
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined" onClick={handleCreateAccount}>
              Create Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
