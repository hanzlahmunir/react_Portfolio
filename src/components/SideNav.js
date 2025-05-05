import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    useMediaQuery,
    Box
} from '@mui/material';
import {
    Home as HomeIcon,
    School as SchoolIcon,
    Work as WorkIcon,
    Mail as MailIcon,
    Menu as MenuIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
    { text: 'Contact', icon: <MailIcon />, path: '/contact' }
];

const SideNav = () => {
    const isMobile = useMediaQuery('(max-width:992px)');
    const [open, setOpen] = useState(!isMobile);
    const navigate = useNavigate();

    const drawerContent = (
        <Box sx={{ width: 250 }}>
            <List>
                {navItems.map(({ text, icon, path }) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => {
                            navigate(path);
                            if (isMobile) setOpen(false);
                        }}
                    >
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {isMobile && (
                <IconButton
                    onClick={() => setOpen(true)}
                    sx={{ position: 'fixed', top: 80, left: 10, zIndex: 1300 }}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        top: 64,
                        width: 250
                    }
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default SideNav;
