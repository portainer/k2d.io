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
                        Talks and Videos
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '22px',color:'#f5f6f7' }}>
                        Learn more about from watching demonistrations and talks.
                    </Typography>
                </Box>
<iframe width="100%" height="500" src="https://www.youtube.com/embed/PlV5SH5UX1c?si=SGyIZmP1iXWG6tie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>
        </Container>
    );
}

export default Videos;
