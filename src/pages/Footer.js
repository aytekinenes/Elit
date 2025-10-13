import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#000',
                color: '#ffffff',
                paddingBlock: 5,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography variant="h4">
                İletişim
            </Typography>
            <Box paddingTop={2}>
                <Typography variant='body1' color="#6b7280">
                    Telefon ve e-postayla bize ulaşabilirsiniz. WhatsApp için sağ üstteki kısayolu kullanın.
                </Typography>
            </Box>
            <Box paddingTop={2}>
                <Typography variant='body1'>
                    <strong>Telefon: </strong><a href="tel:05403061991" style={{ textDecoration: 'none', color: '#ffcc00' }}>0540 306 19 91</a>
                </Typography>
            </Box>
            <Box paddingTop={2}>
                <Typography variant='body1'>
                    <strong>E-posta: </strong><a href="mailto:info@elitled.com" style={{ textDecoration: 'none', color: '#ffcc00' }}>info@elitled.com</a>
                </Typography>
            </Box>
            <Box paddingTop={2} >
                <Grid container spacing={2} justifyContent='center'>
                    <Box>
                        <Button className="instagram" startIcon={<InstagramIcon />} href="https://instagram.com/ledsys.com.tr?igsh=YXB2anVmOWdxemF2" target="_blank">Instagram</Button>
                    </Box>
                    <Box>
                        <Button variant="contained" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/company/elitled" target="_blank">LinkedIn</Button>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}
export default Footer;