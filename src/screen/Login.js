import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Button, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

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
      <Typography variant="h4" align="center" gutterBottom sx={{ color: theme.palette.primary.main }}>
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
              InputProps={{ sx: { color: theme.palette.primary.main } }}
              InputLabelProps={{ sx: { color: theme.palette.primary.main } }}
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
              InputProps={{ sx: { color: theme.palette.primary.main } }}
              InputLabelProps={{ sx: { color: theme.palette.primary.main } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ backgroundColor: theme.palette.primary.main }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              variant="body2"
              onClick={handleForgotPassword}
              sx={{ color: theme.palette.secondary.main }}
            >
              Forgot Password?
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleCreateAccount}
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
              startIcon={<PersonAddIcon />}
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
