import { useTheme } from '@emotion/react';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Kubernetes from '../assets/kubernetes.png';
import ToolBlock from './ToolBlock';
import { useColorMode } from '@docusaurus/theme-common';
function Tools() {
  const theme = useTheme();
    const {colorMode} =useColorMode();
    const isDarkMode=colorMode=='dark';
    const light=theme.palette.primary.light;
    const dark=theme.palette.primary.dark;
    const med = theme.breakpoints.down(1100);
    return (
        <Container maxWidth="xl" sx={{  color: isDarkMode?light:dark, paddingBottom: '100px' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '40px',
                    padding: '0 30px',
                    [med]: {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            >
                <img src={Kubernetes} alt="logo" width="140px" />
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                            color: 'inherit',
                            [med]: {
                                textAlign: 'center',
                            },
                        }}
                    >
                        Kubernetes Ready
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '20px', color: 'inherit'}}
                    >
                        Create, start, inspect, and manage pods. Play Kubernetes YAML directly with
                        Podman, generate Kubernetes YAML from pods, and deploy to existing
                        Kubernetes environments.
                    </Typography>
                </Box>
            </Box>
            <Typography
                sx={{
                    textAlign: 'center',
                    margin: '10px',
                    fontSize: '1.875rem',
                    lineHeight: '2.25rem',
                    paddingBlock: '60px',
                    letterSpacing: '2px',
                    fontWeight: '400',
                    color: 'inherit',
                }}
            >
                A growing set of compatible tools
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '30px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <ToolBlock />
                <ToolBlock />
                <ToolBlock />
                <ToolBlock />
            </Box>
        </Container>
    );
}

export default Tools;
