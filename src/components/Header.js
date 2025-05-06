// src/components/Header.js
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../context/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';
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

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { toggleTheme, mode } = useThemeContext();

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

                    <Box display="flex" alignItems="center" gap={2}>
                        <IconButton onClick={toggleTheme} sx={{ color: 'inherit' }}>
                            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                        </IconButton>

                        <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                            <Avatar alt="Hanzlah" src="/profile.jpg" />
                        </IconButton>
                    </Box>


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
