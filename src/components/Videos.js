import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import HeaderImg from '../assets/k2d-arch-diagram.png';
import CustomButton from './CustomButton';

const styles = {
    Videos: {
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
};
function Videos() {
    const theme = useTheme();
    const med = theme.breakpoints.down(1000);
    return (
        <Container
            maxWidth="xl"
            sx={{
                background: (theme) => theme.palette.background.paper,
                paddingBottom: '2rem',
            }}
        >
            <Box
                marginInline="auto"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '20px',
                    [med]: {
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    },
                }}
            >
                <Box
                    sx={{
                        padding: '10px',
                        maxWidth: '600px',
                        paddingTop: '4rem',
                        [med]: {
                            paddingBlock: '1rem',
                        },
                    }}
                >
                    <Typography sx={styles.Videos}>
                        Kubernetes™ to Docker™
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '22px',color:'#f5f6f7' }}>
                        A real-time Kubernetes API translator for the edge!
                    </Typography>
                    <Box
                        sx={{
                            marginBlock: '1rem',
                            display: 'flex',
                            gap: '1rem',

                            margin: '1rem auto 0',
                            [med]: {
                                flexDirection: 'column',
                                alignItems: 'center',
                            },
                        }}
                    >
                        <CustomButton txt={'Github'} link={'https://github.com/portainer/k2d'}/>
                        <CustomButton txt={'Quick Start'} link={'https://docs.k2d.io/quick-start-guide'}/>
                    </Box>
                </Box>
                <Box
                    sx={{
                        alignSelf: 'end',
                        // background:'red',
                        [med]: {
                            paddingTop: '2rem',
                            justifySelf: 'flex-end',
                            display: 'flex',
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={HeaderImg}
                        alt="banner"
                        sx={{
                            margin: 'auto',

                            width: '90%',
                            marginTop: '5rem',
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default Videos;
