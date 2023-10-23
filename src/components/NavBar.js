import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/logo.png';
import NavItems from './NavItems';

const NavBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '.5rem 1rem',
                background: 'linear-gradient(90deg, rgba(11,165,236,1) 50%, rgba(29,41,57,1) 100%)',
            }}
        >
            <Grid container alignItems="center">
                <Grid item>
                    <Typography variant="h6" style={{ flex: 1, marginRight: 'auto' }}>
                        <img src={Logo} alt="Logo" style={{ height: '105px' }} />
                        {/* <Logo/> */}
                    </Typography>
                </Grid>
                <Grid item sx={{ marginLeft: 'auto' }}>
                    <NavItems label="Features" />
                    <NavItems label="Get Started" />
                    <NavItems
                        label="Community
"
                    />
                    <NavItems label="Development Blog" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default NavBar;
