import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Already have An Account ? '}
      <Link href="/login">
        Login
      </Link>
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      email: data.get('email'),
      password: data.get('password'),
      fname: data.get('firstName'),
      lname: data.get('lastName'),
    }

    fetch("http://localhost:3333/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          alert('register sucess')
          window.location = '/login'
        } else {
          alert('register failed')
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  };

  return (
    <ThemeProvider theme={defaultTheme} >

    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

        }}
      >
        <Avatar sx={{ width: "100px", height: "100px", m: 1, bgcolor: 'primary.dark' }}>
          <BrightnessLowTwoToneIcon sx={{ width: "100px", height: "100px" }}>
          </BrightnessLowTwoToneIcon>
        </Avatar>
        <Typography component="h5" variant="h6" sx={{ color: 'primary.dark', fontWeight: 'bold' }} >
          DENFAH PRINTING
        </Typography>
        <Typography component="h1" variant="h3.5" sx={{ fontWeight: 'bold' }}>
          Create an account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required=''
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required=''
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Enter Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Enter your password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            Create account
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 1 }} />
    </Container>
     </ThemeProvider>
  );
}