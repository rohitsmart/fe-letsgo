import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import theme from '../component/Theme';

function Home(props) {
  const appliedTheme = useTheme(theme);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Grid container spacing={4}>
        {/* Train Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ color: appliedTheme.palette.secondary.main, fontWeight: 'bold' }}>
              Train Services
            </Typography>
            <Typography variant="body1" sx={{ color: appliedTheme.palette.secondary.main }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus vel tellus commodo, id consectetur lacus mollis. Mauris vehicula eget elit nec faucibus. Sed eu eros vitae lectus posuere lobortis.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/images/train.jpg" alt="Train" style={{ width: '100%', height: '100%' }} />
        </Grid>

        {/* Flight Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ color: appliedTheme.palette.secondary.main, fontWeight: 'bold' }}>
              Flight Services
            </Typography>
            <Typography variant="body1" sx={{ color: appliedTheme.palette.secondary.main }}>
              Integer sed lorem sit amet tortor vehicula lobortis id et felis. Phasellus vitae mauris sed massa rutrum faucibus. Aliquam convallis, ipsum nec consequat malesuada, est mi convallis lectus, at fermentum velit magna non nulla.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/images/flight.jpg" alt="Flight" style={{ width: '100%', height: '100%' }} />
        </Grid>

        {/* Hotel Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ color: appliedTheme.palette.secondary.main, fontWeight: 'bold' }}>
              Hotel Accommodations
            </Typography>
            <Typography variant="body1" sx={{ color: appliedTheme.palette.secondary.main }}>
              Phasellus ullamcorper semper neque vel porttitor. Curabitur ac libero auctor, faucibus eros nec, laoreet neque. Suspendisse eget dictum ex. Donec vestibulum, libero vel sagittis pharetra, risus nunc tempor mauris.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/images/hotel.jpg" alt="Hotel" style={{ width: '100%', height: '100%' }} />
        </Grid>

        {/* Happy Customers Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ color: appliedTheme.palette.secondary.main, fontWeight: 'bold' }}>
              Happy Customers
            </Typography>
            <Typography variant="body1" sx={{ color: appliedTheme.palette.secondary.main }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tristique felis in ipsum vestibulum, nec lobortis nisi gravida. Sed at ultrices velit.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/images/female.jpg" alt="Happy Customers" style={{ width: '100%', height: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
