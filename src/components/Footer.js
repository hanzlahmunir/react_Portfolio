import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 3,
                mt: 5,
                backgroundColor: 'background.paper',
                textAlign: 'center',
                boxShadow: '0 -2px 8px rgba(0,0,0,0.05)'
            }}
        >
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} Hanzlah Munir. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
