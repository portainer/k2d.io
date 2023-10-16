import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import React from 'react';
import FeatureBlock from './FeatureBlock';
function Features() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                flexWrap: 'wrap',
                display: 'flex',
                paddingBlock: '100px',
                justifyContent: 'center',
                gap: '30px',
                [theme.breakpoints.down(600)]: {
                    flexDirection: 'column',
                    gap: '10px',
                    alignItems: 'center',
                },
            }}
        >
            <FeatureBlock heading="Fast and light.">
                Daemonless, using the fastest technologies for a snappy experience. Our UI is
                reactive and light on resource usage and won't drag you down.
            </FeatureBlock>
            <FeatureBlock heading="Secure.">
                Rootless containers allow you to contain privileges without compromising
                functionality. Trusted by US government agencies for secure HPC at scale{' '}
                <a href="#">case study</a>.
            </FeatureBlock>
            <FeatureBlock heading="Open.">
                Podman is open source first and won't lock you in. Podman Desktop can be used as one
                tool to manage all your containers, regardless of container engine - even if you
                don't use Podman as your container engine.
            </FeatureBlock>
            <FeatureBlock heading={'Compatible'}>
                Compatible with other OCI compliant container formats including Docker. Run your
                legacy Docker containers (including docker-compose files) on Podman.{' '}
                <a href="#">Learn more</a>
            </FeatureBlock>
        </Box>
    );
}

export default Features;
