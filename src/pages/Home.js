import React from 'react';
import {
    Avatar,
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    LinearProgress,
    useMediaQuery
} from '@mui/material';

const skills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 }
];

const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ background: '#f0f4f8', minHeight: '100vh', py: 5 }}>
            <Container maxWidth="md">
                {/* Hero Profile Section */}
                <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
                    <Avatar
                        alt="Hanzlah Munir"
                        src="/profile.jpg"
                        sx={{
                            width: 160,
                            height: 160,
                            mb: 2,
                            boxShadow: 4,
                            border: '4px solid white'
                        }}
                    />
                    <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight={700} color="primary">
                        Hanzlah Munir
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Full Stack Developer | UI/UX Designer
                    </Typography>
                </Box>

                {/* About Section */}
                <Paper elevation={3} sx={{ p: 4, mb: 5, borderRadius: 3 }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                        Turning ideas into reality, one line of code at a time.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        I'm a passionate full-stack developer with 3+ years of experience crafting responsive
                        and scalable web applications. Specializing in modern JavaScript frameworks like React
                        and Node.js, I bring ideas to life with clean, efficient code. When I'm not coding,
                        you'll find me exploring new design trends or contributing to open-source projects.
                    </Typography>
                </Paper>

                {/* Skills Section */}
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                        Skills
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={3}>
                        {skills.map(skill => (
                            <Box key={skill.name}>
                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                    {skill.name}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={skill.level}
                                    sx={{
                                        height: 16,
                                        borderRadius: 8,
                                        backgroundColor: '#e0e0e0',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#1976d2'
                                        }
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Home;
