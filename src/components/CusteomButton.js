import { useTheme } from '@emotion/react';
import { Link } from '@mui/material';
import React from 'react';

function CusteomButton({ txt, link = '#' }) {
    const theme = useTheme();
    return (
        <Link
            href={link}
            sx={{
                padding: '10px 24px',
                marginLeft: '8px ',
                background: theme.palette.primary.light,
                borderRadius: '10px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '20px',
            }}
        >
            {txt}
        </Link>
    );
}

export default CusteomButton;
