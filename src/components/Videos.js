import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';

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
                    display: 'left',
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
                </Box>
            </Box>
            <iframe width="640" height="360" src="https://www.youtube.com/embed/PlV5SH5UX1c?si=SGyIZmP1iXWG6tie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Container>
    );
}

export default Videos;
