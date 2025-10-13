import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogModuls = () => {
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
                        <CardMedia image='/images/car3.jpg' title='İç ve dış modüller' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>İç ve dış modüller</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Hangi ortam için hangi modül?</strong>
                        </Typography>
                        <Typography variant="body2">
                            Dış mekan modüller genelde daha parlak, suya ve dış etkilere dayanıklı (IP65+), daha dayanıklı kasaya sahiptir. İç mekan modüller ise daha ince, daha düşük parlaklıkta ve genelde daha küçük pitch seçenekleri sunar.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogModuls;