import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions
} from '@mui/material';

const ProjectCard = ({ title, description, image, link }) => {
    return (
        <Card
            elevation={4}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6
                }
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    height: 180,
                    objectFit: 'cover'
                }}
            />
            <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    href={link}
                    target="_blank"
                >
                    View Project
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
