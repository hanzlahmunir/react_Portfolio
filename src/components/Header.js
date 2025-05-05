// src/components/Header.js
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" color="primary" sx={{ zIndex: 1201 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" noWrap>
                    Hanzlah Munir
                </Typography>
                <Box>
                    <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                        <Avatar alt="Hanzlah" src="/profile.jpg" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        onClick={handleMenuClose}
                    >
                        <MenuItem disabled>Logout (Coming Soon)</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
