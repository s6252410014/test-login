import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch("http://localhost:3333/authen", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                   
                } else {
                    
                    localStorage.removeItem('token')
                    window.location = '/login'
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }, [])

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        window.location = '/login'
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Main site
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >, 
                    <Container maxWidth="sm" sx={{color: "error.main"}}>
                        <Stack
                            sx={{ pt: 5 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"

                        >
                            <Button variant="contained" onClick={handleLogout} >Logout</Button>

                        </Stack>
                    </Container>
                </Box>
              
            </main>
            
        </ThemeProvider>
    );
}