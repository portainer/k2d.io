import { Box, Typography } from '@mui/material';
import React from 'react';
import ToolImg from '../assets/tools.jpg';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '@docusaurus/theme-common';




function ToolBlock() {
        const theme = useTheme();
    const {colorMode} =useColorMode();
    const isDarkMode=colorMode=='dark';
    const light=theme.palette.primary.light;
    const dark=theme.palette.primary.dark;
    return (
        <Box
            sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                maxWidth: '240px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '10px',
                color:'inherit',
                background:isDarkMode?dark:light,
            }}
        >
            <img alt="tool logo" src={ToolImg} width="80px" style={{ marginBlock: '32px' }} />
            <Typography sx={{ color: 'inherit', fontSize: '20px' }}>
                Kind's ability to run local Kubernetes clusters via container nodes includes support
                for Podman
            </Typography>
        </Box>
    );
}

export default ToolBlock;
