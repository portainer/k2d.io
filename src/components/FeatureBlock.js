import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '@docusaurus/theme-common';
function FeatureBlock({ heading, children }) {
    const theme = useTheme();
    const {colorMode} =useColorMode();
    const isDarkMode=colorMode=='dark';
    const light=theme.palette.primary.light;
    const dark=theme.palette.primary.dark;

    return (
        <Box
            elevation={3}
            sx={{
                background: isDarkMode?dark:light,
                paddingBlock: '48px',
                paddingInline: '12px',
                marginBlock: '24px',
                marginInline: '12px',
                textAlign: 'center',
                maxWidth: '40%',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                borderRadius: '10px',
                [theme.breakpoints.down(600)]: {
                    maxWidth: '80%',
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    padding: '8px',
                    margin: '0 0 16px 0',
                    color: '#0BA5EC',
                    textAlign: 'center',
                }}
            >
                {heading}
            </Typography>
            <Typography
                sx={{
                    fontSize: '20px',
                    textAlign: 'center',
                    margin: 'auto',
                    maxWidth: '450px',
                    fontWeight: '500',
                    color: isDarkMode?light:dark,
                }}
            >
                {children}
            </Typography>
        </Box>
    );
}

export default FeatureBlock;
