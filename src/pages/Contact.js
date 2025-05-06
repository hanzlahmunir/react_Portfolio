import React from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(2),
    email: yup.string().required('Email is required').email(),
    message: yup.string().required('Message is required').min(10)
});

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        reset(); // clear form
        alert('Message sent successfully!');
    };

    return (
        <Container maxWidth="sm" sx={{ py: 5 }}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h4" color="primary" gutterBottom textAlign="center">
                    📩 Contact Me
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        margin="normal"
                        multiline
                        rows={4}
                        {...register('message')}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                        Send Message
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Contact;
