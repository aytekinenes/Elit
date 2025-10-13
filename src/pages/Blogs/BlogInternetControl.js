import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogInternetControl = () => {
    return (
        <Box paddingBlock={11}>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                }}
            >
                <Paper
                    sx={{
                        width: { xs: '90%', sm: '70%', md: '70%', lg: '70%', xl: '70%' },
                        flex: null,
                        aspectRatio: '20 / 25',
                        maxHeight: '700px',
                        minHeight: '500px',
                        padding: { xs: 1, sm: 2, md: 3, lg: 10, xl: 10 }
                    }}
                >
                    <>
                        <CardMedia image='/images/car2.jpg' title='İnternet üzerinden kontrol' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>İnternet üzerinden kontrol</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Uzaktan yönetim ve güvenlik</strong>
                        </Typography>
                        <Typography variant="body2">
                            Kontrol kartları (Player/Routers) genelde Ethernet/Wi‑Fi üzerinden sunuculara bağlanır. Uzaktan içerik yönetimi için kontrol yazılımları veya bulut servisleri kullanılır; güvenlik için VPN veya güvenli bağlantı tavsiye edilir.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogInternetControl;