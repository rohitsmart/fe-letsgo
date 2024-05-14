import React from 'react';
import { Typography, Container, Grid, Link, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const theme = useTheme();

  return (
    <footer>
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main, py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" component="h2" gutterBottom>
                Developers
              </Typography>
              <Typography variant="body2" gutterBottom>
                Java 
              </Typography>
              <Typography variant="body2" gutterBottom>
              Juggler
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" component="h2" gutterBottom>
                Company
              </Typography>
              <Typography variant="body2" gutterBottom>
                PerfectKode
              </Typography>
              <Typography variant="body2" gutterBottom>
                Address: B98 sector-2, Noida, India
              </Typography>
              <Typography variant="body2" gutterBottom>
                Phone: 123-456-7890
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, py: 2 }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              <GitHubIcon />
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 10px' }}>
              <InstagramIcon />
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} PerfectKode. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;






