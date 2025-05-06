import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const educationData = [
    {
        degree: "Bachelor's in Computer Science",
        institution: 'Information Technology University',
        years: '2023 - 2027'
    },
    {
        degree: 'Intermediate (Pre-Engineering)',
        institution: 'Forman Christian College',
        years: '2021 - 2023'
    },
    {
        degree: 'Matriculation (Science)',
        institution: 'Unique High School',
        years: '2019 - 2021'
    }
];

const Education = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography variant="h4" color="primary" gutterBottom textAlign="center">
                🎓 Education
            </Typography>

            {/* Carousel */}
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mb: 5 }}>
                <AutoPlaySwipeableViews
                    interval={3500}
                    enableMouseEvents
                    style={{ borderRadius: '12px', overflow: 'hidden' }}
                >
                    {educationData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: '220px', // 🚨 lock height to prevent layout shift
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                px: 2
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                    maxWidth: '500px',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        backgroundColor: '#f0f4f8',
                                        borderRadius: '12px'
                                    },
                                    p: 3
                                }}
                            >
                                <Typography variant="h5" fontWeight={600} gutterBottom>
                                    {item.degree}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {item.institution}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.years}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </AutoPlaySwipeableViews>
            </Paper>

            {/* Table */}
            <Paper elevation={3} sx={{ borderRadius: 3 }}>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ backgroundColor: theme.palette.grey[900] }}>
                            <TableRow>
                                <TableCell sx={{ color: '#fff' }}>Degree</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Institution</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Years</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {educationData.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.degree}</TableCell>
                                    <TableCell>{item.institution}</TableCell>
                                    <TableCell>{item.years}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default Education;
