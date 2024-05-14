import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Button, Link, Modal, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function AccountCreationModal({ open, handleClose }) {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    pinCode: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Implement submission logic here
    console.log("Submitting account creation form:", formData);
    // Close the modal after submission
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          maxWidth: 400
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{ color: theme.palette.primary.main }}>
          Create Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="PIN Code"
                fullWidth
                variant="outlined"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                fullWidth
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Create
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

function Login(props) {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAccountCreationOpen, setAccountCreationOpen] = useState(false);

  const handleLogin = () => {
    // Call API to submit login credentials
    console.log("Logging in with:", { email, password });
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password form or perform necessary action
    console.log("Forgot Password");
  };

  const handleCreateAccount = () => {
    // Toggle visibility of account creation modal
    setAccountCreationOpen(true);
  };

  const handleCloseAccountCreation = () => {
    // Close the account creation modal
    setAccountCreationOpen(false);
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
      <AccountCreationModal open={isAccountCreationOpen} handleClose={handleCloseAccountCreation} />
    </Container>
  );
}

export default Login;
