import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogLedScreen = () => {
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
                        <CardMedia image='/images/car2.jpg' title='LED ekran nedir?' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>LED ekran nedir?</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Modüller ve piksel kontrolü</strong>
                        </Typography>
                        <Typography variant="body2">
                            LED ekranlar, çok sayıda LED modülün bir araya gelmesiyle oluşur. Her modül içinde çok sayıda piksel bulunur ve bu piksellerin kontrolüyle metin, video ve grafik gösterimleri yapılır. Profesyonel uygulamalarda modül seçimi, sürücü ve sinyal altyapısı görüntü kalitesini belirler.
                        </Typography>
                        <Typography variant="body2">
                            Modüller birleştirilerek istenen boyutta ekran kurulabilir; kontrol sistemleri sayesinde piksellerin renk ve parlaklığı gerçek zamanlı olarak yönetilir.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogLedScreen;