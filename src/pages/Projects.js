import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Container, Grid, Typography, Box } from '@mui/material'; // make sure Box is here


const projects = [
    {
        title: 'Chess Game',
        description: 'A multiplayer online chess platform with real-time gameplay.',
        image: '/images/download.jpeg',
        link: '#'
    },
    {
        title: 'iDocScan App',
        description: 'Real-time document scanner with integrated AI chatbot.',
        image: '/images/idocscan.png',
        link: '#'
    },
    {
        title: 'Weather App',
        description: 'Live weather updates across the globe using OpenWeather API.',
        image: '/images/weather.jpeg',
        link: '#'
    },
    {
        title: 'Drive Sensing App',
        description: 'Real-time driving behavior tracking with AI-powered insights.',
        image: '/images/drive.jpeg',
        link: '#'
    },
    {
        title: 'TypeWriter App',
        description: 'Cloud-based markdown note-taking with autosave.',
        image: '/images/typewriter.jpeg',
        link: '#'
    },
    {
        title: 'ChatBot App',
        description: 'AI chatbot built with LLM integration and contextual memory.',
        image: '/images/chatbot.jpeg',
        link: '#'
    }
];

const Projects = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Typography
                variant="h4"
                color="primary"
                gutterBottom
                textAlign="center"
                sx={{ mb: 4 }}
            >
                💼 Projects
            </Typography>

            <Grid container spacing={4}>
                {projects.slice(0, 6).map((project, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <Box sx={{ height: '100%' }}>
                            <ProjectCard {...project} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
