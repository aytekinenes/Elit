import React, { useEffect, useState } from "react";
import { CardMedia as CardMediaMI } from '@mui/material';

const CardMedia = (props) => {
    return (
        <CardMediaMI
            sx={{ height: "45%", objectFit: "cover", opacity: 0.8, ...props.sx }}
            image={props.image}
            title={props.title}
        />
    );
}
export default CardMedia;