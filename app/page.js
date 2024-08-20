'use client'

import Image from "next/image";
import useFirebase from "../firebase";
import { SignedIn, SignedOut, UserButton, ClerkProvider } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Grid, Box, Paper, Avatar } from "@mui/material";
import Head from 'next/head';
import getStripe from '@/utils/get-stripe'
import { loadStripe } from '@stripe/stripe-js'
import gradientStyles from '../components/gradientfuture.module.css';
import borderStyles from '../components/animatedborder.module.css'
export default function Home() {
  
  const handleSubmit = async() =>{
    try {
        const checkoutSession = await fetch('/api/checkout_session', {
            method: 'POST',
            headers: {
                origin: 'http://localhost:3000',
            },
        });

        const checkoutSessionJson = await checkoutSession.json();

        if (checkoutSession.statusCode === 500) {
            console.error(checkoutSession.message);
            return;
        }

        const stripe = await getStripe();

        // Check if stripe is defined
        if (!stripe) {
            throw new Error('Stripe is not initialized. Please check your API key and initialization.');
        }

        const { error } = await stripe.redirectToCheckout({
          sessionId: checkoutSessionJson.id,
        });

        if (error) {
            console.warn(error.message);
        }
    } catch (error) {
        console.error('Error in handleSubmit:', error);
        alert('An error occurred: ' + error.message);
    }
  }
  return (

<Container maxWidth="100vw" sx={{ minHeight: '100vh', backgroundColor: '#fdf9f6', paddingTop: '64px' }}>
      
      {/* Top Left Text */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          color: '#000',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Ultra, sans-serif',
            fontSize: '2rem',
            color: '#000',
          }}
        >
          Catechize
        </Typography>
      </Box>

      {/* Top Right Corner Buttons */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontFamily: 'Ultra'
        }}
      >
        <SignedOut>
          <Button
            variant="text"
            sx={{ color: 'black', border: '1px solid white', borderRadius: '12px' }}
            href="/sign-in"
          >
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: '#fff',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            href="/sign-up"
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
          py: 4,
          fontFamily: 'Ultra, sans-serif',
        }}

        >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: '2rem',
            fontWeight: '',
            color: '#000',
            fontFamily: 'Ultra',
            mb: 1, // Margin bottom to separate from the next line
          }}
        >
          Embracing the <span style={{ color: '#ff6f3b' }}>future,</span>
          </Typography>

          <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: '3rem',
            fontWeight: 'normal',
            color: '#000',
            fontFamily: 'Ultra',
            }}
            >
          For your <span className={gradientStyles.gradientText}>future</span>
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: '1.5rem',
            fontWeight: '300',
            color: '#333',
            fontFamily: 'sans-serif'
          }}
        >
          Traditional methods meet new technology
        </Typography>

        <Button href="/generate"
          Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4,}}>
          <Typography className={borderStyles.animatedBorder}>
          Create AI flashcards
          </Typography>
          </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" 
        gutterBottom 
        textAlign="center"
        sx={{ fontFamily: 'Ultra, sans-serif'}}
        color={'#ff6f3b'}
        >
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" 
              gutterBottom
                sx={{ fontFamily: 'Ultra, sans-serif'}}
                >
                K-12 flashcards
              </Typography>
              <Typography>
                Cut time on planning. Focus more on teaching.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2}}>
                <Avatar
                alt="Flashcards"
                src="/images/toddlerflashcards.jpg"
                sx={{ width: 500, height: 500, borderRadius:'10%'}}
                />
                </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" 
              gutterBottom
              sx={{ fontFamily: 'Ultra, sans-serif'}}
                >

                Save hours making flashcards
              </Typography>
              <Typography>
                Make quizzes, chat with AI, get instant results.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Avatar
                alt="Notes"
                src="/images/studynotes.jpg"
                sx={{ width: 500, height: 500}}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" 
              gutterBottom
              sx={{ fontFamily: 'Ultra, sans-serif'}}
                >
                Available in any language
              </Typography>
              <Typography>
                Study anywhere, at any time. 
              </Typography>
              <Box sx={{ mt:2 }}>
                <Avatar
                alt="Language"
                src="/images/languages.jpg"
                sx={{ width: 500, height: 500, borderRadius: '1%'}}
              />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" 
        gutterBottom 
        textAlign="center"
        color='#ffc932'
          sx={{ fontFamily: 'Ultra, sans-serif'}}
          >
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
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
                Choose Premium
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )}