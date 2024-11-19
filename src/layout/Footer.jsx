// Footer.js
import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', mt: 5, py: 4 }}>
            <Container>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We are a leading company in our field, dedicated to providing exceptional service and quality products to our customers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" color="inherit" underline="hover">
                            Home
                        </Link><br />
                        <Link href="#" color="inherit" underline="hover">
                            About
                        </Link><br />
                        <Link href="#" color="inherit" underline="hover">
                            Services
                        </Link><br />
                        <Link href="#" color="inherit" underline="hover">
                            Contact
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Link href="#" color="inherit" sx={{ mr: 2 }}>
                                <Facebook />
                            </Link>
                            <Link href="#" color="inherit" sx={{ mr: 2 }}>
                                <Twitter />
                            </Link>
                            <Link href="#" color="inherit" sx={{ mr: 2 }}>
                                <Instagram />
                            </Link>
                            <Link href="#" color="inherit">
                                <LinkedIn />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                    &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
