import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogPixelResolution = () => {
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
                        <CardMedia image='/images/car3.jpg' title='Piksel & Çözünürlük' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>Piksel & Çözünürlük</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Görüntü kalitesini etkileyen temel ölçütler</strong>
                        </Typography>
                        <Typography variant="body2">
                            Piksel, görüntünün en küçük birimidir; çözünürlük ise yatay x dikey piksel sayısını ifade eder. Aynı fiziksel alandaki daha yüksek çözünürlük daha net görüntü demektir. Pitch (mm) izleme mesafesiyle doğrudan ilişkilidir ve seçim yapılırken kullanım senaryosu göz önünde bulundurulmalıdır.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogPixelResolution;