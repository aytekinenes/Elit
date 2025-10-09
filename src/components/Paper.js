import React, { useEffect, useState } from "react";
import { Paper as MIPaper, CardMedia, Typography, CardActions, Button, CardContent } from '@mui/material';

const Paper = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    return (
        <MIPaper
            elevation={24}
            sx={{
                flex: { xs: "100%", sm: "48%", md: "32%" },
                aspectRatio: "1 / 1",
                maxHeight: "550px",
                minHeight: { xs: '550px', sm: '550px' },
                position: "relative",
                overflow: "hidden",
            }}
        >
            <CardMedia
                sx={{ height: "45%", objectFit: "cover", opacity: 0.8 }}
                image={props.image}
                title={props.title}

            />
            <CardContent>
                {childrenArray[0]}
            </CardContent>
            <CardActions>
                {childrenArray[1]}
            </CardActions>
        </MIPaper>
    );
}

export default Paper;