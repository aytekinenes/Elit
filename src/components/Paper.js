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
            {childrenArray[0]}
            <CardContent>
                {childrenArray[1]}
            </CardContent>
            <CardActions>
                {childrenArray[2]}
            </CardActions>
        </MIPaper>
    );
}

export default Paper;