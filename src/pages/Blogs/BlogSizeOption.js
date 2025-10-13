import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogSizeOption = () => {
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
                        <CardMedia image='/images/car1.jpg' title='Ölçü seçenekleri' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>Ölçü seçenekleri</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Modül ebatları ve planlama</strong>
                        </Typography>
                        <Typography variant="body2">
                            LED ekranlar modüllerden oluşur; modül ebatları (ör. 320x160mm) kurulum ve çözünürlük planlamasında temel rol oynar. Ekranın toplam ölçüsü modül adımına göre belirlenir ve kurulum sırasında modül yerleşimi dikkatle planlanmalıdır.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogSizeOption;