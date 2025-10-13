import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogViewingDistance = () => {
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
                        <CardMedia image='/images/car2.jpg' title='İzleme mesafesi' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>İzleme mesafesi</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Doğru pitch seçimi</strong>
                        </Typography>
                        <Typography variant="body2">
                            Genel kural: Minimum izleme mesafesi ≈ piksel pitch (mm) × 3–4 (metre cinsinde). Yakın mesafe için küçük pitch; uzak mesafe için daha büyük pitch seçilir.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogViewingDistance;