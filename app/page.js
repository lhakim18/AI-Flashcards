import Image from "next/image";
import { SignedIn, SignedOut, UserButton, ClerkProvider } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Grid, Box, Paper } from "@mui/material";
import Head from 'next/head';


export default function Home() {
  return (

    <Container maxWidth="lg" sx={{ minHeight: '100vh', paddingTop: '64px' }}>
      <Head>
    
      </Head>

{/* Top Left Text */}
<Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          color: 'fff',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'ClashDisplay, sans-serif',
            fontSize: '2rem',
            color: '#000',
          }}
        >
         Catechize
        </Typography>
      </Box>


{/* Top right corner buttons */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <SignedOut>
          <Button
            variant="text"
            sx={{ color: 'black', border: '1px solid white', borderRadius: '12px' }}
            href = "/sign-in"
          >
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            href = "/sign-up"
          >
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Box>


      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 10,
          fontFamily: 'ClashDisplay, sans-serif',
          color: '000',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Discover Your Ideal Home
        </Typography>
        <Typography variant="h5" gutterBottom>
          Find the perfect place for you and your family
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            mt: 2,
            backgroundColor: '#000',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Explore Now
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Modern Design
              </Typography>
              <Typography>
                Discover spaces designed for the modern lifestyle with all the amenities you need.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Convenient Locations
              </Typography>
              <Typography>
                Find homes in the most sought-after neighborhoods with easy access to local services.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                24/7 Support
              </Typography>
              <Typography>
                Enjoy peace of mind with our round-the-clock customer support for all your needs.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Pricing Plans
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / month
              </Typography>
              <Typography>
                Access to essential features and basic support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Premium
              </Typography>
              <Typography variant="h6" gutterBottom>
                $20 / month
              </Typography>
              <Typography>
                Unlimited access with premium features and priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Premium
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>

 
  );
}