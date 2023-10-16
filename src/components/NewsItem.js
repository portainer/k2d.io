import { Box, Link, Typography, useTheme } from '@mui/material';
import React from 'react';
import NewsImg from '../assets/news.png';
import { useColorMode } from '@docusaurus/theme-common';



function NewsItem() {
        const theme = useTheme();
    const {colorMode} =useColorMode();
    const isDarkMode=colorMode=='dark';
    const light=theme.palette.primary.light;
    const dark=theme.palette.primary.dark;
                //   background:isDarkMode?dark:light,
                //     color: isDarkMode?light:dark,
    return (
        <Box
            sx={{
                maxWidth: '330px',
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                color: 'black',
                marginBlock: '16px',
                background:isDarkMode?dark:light,
            }}
        >
            <img alt="news" src={NewsImg} width="330px" />
            <Link
                sx={{
                    background: '#0BA5EC',
                    padding: '15px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    marginTop: '16px',
                    color:"white",
                    cursor:'pointer',
                    '&:hover': {
            backgroundColor: light,
            color:dark,
        },
                }}
            >
                Why does SELinux container policy allow all Linux capabilities?
            </Link>
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: isDarkMode?light:dark,
                }}
            >
                I recently had a discussion in a container-selinux issue on why we allow certain
                capabilities by default for containers. The conversation is around DAC_OVERRIDE, a
                Linux capability which allows privileged processes, usually...
            </Typography>
        </Box>
    );
}

export default NewsItem;
