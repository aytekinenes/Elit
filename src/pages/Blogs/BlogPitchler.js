import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogPitchler = () => {
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
                        <CardMedia image='/images/car1.jpg' title='Pitchler' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>Pitchler</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>P1.86, P2.5, P3... hangi iş için uygun?</strong>
                        </Typography>
                        <Typography variant="body2">
                            Pitch, piksel merkezleri arasındaki mesafeyi (mm) ifade eder. Küçük pitch daha yakın izleme ve yüksek çözünürlük gerektiren uygulamalar için uygundur; büyük pitch ise uzak izleme ve daha ekonomik çözümler için tercih edilir.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogPitchler;