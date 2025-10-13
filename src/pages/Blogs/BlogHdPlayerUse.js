import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogHdPlayerUse = () => {
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
                        <CardMedia image='/images/car3.jpg' title='HD Player kullanımı' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>HD Player kullanımı</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Doğru player seçimi</strong>
                        </Typography>
                        <Typography variant="body2">
                            HD medya oynatıcılar (HD players) medya dosyalarını decode edip ekranlara aktarır. Özellikle yüksek çözünürlüklü videolar için güçlü bir player kullanılması görüntü kalitesini etkiler.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogHdPlayerUse;