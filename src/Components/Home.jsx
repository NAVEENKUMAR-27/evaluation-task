import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css";


export const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh', 
            }}
        >
            <Grid item xs={12} sx={{ alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h2' className='home_text'>Thank You for Login</Typography>
                    
                    <Link to="/" variant='h6'>Return back to home</Link>
                </Box>
            </Grid>
        </Box>
    );
};
