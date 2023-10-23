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
            <FeatureBlock heading="Kubernetes without K8s">
                There are no Kubernetes components to manage, no etcd, no KubeDNS, etc. Only Docker (or Podman) is required.
            </FeatureBlock>
            <FeatureBlock heading="Industrial IoT Device Support">
                Linux enabled devices, with as little as 1x 700Mhz ARM32 CPU, 512MB of RAM, and a 16GB SD-Card can be managed as if they are a single-node Kubernetes instance..
            </FeatureBlock>
            <FeatureBlock heading="Transparent Translator">
                K2D is a real time translator, which means you can interface with the Docker environment either directly, using Docker commands, or remotely using the Kubernetes API that k2d exposes.
            </FeatureBlock>
        </Box>
    );
}

export default Features;
