import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';

export const MailButton = (props) => {
    return (
        <Button
            variant="outlined"
            size="large"
            href="mailto:info@elitled.com?subject=Servis%20Talebi%20-%20LED%20Mod%C3%BCl%20Tamiri"
        >
            {props.text}
        </Button>
    );
}

export const TelButton = (props) => {
    return (
        <Button
            variant="outlined"
            size="large"
            href="tel:05403061991"
        >
            {props.text}
        </Button>
    );
}