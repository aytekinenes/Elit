import React, { useEffect, useState } from "react";
import Home from "./Home";
import Services from "./Services";
import Working from "./Working";
import Offer from './Offer';
import Footer from "./Footer";
import { Box } from '@mui/material';

const Index = () => {
    return (
        <>
            <div id="anasayfa">
                <Home />
            </div>
            <Box sx={{ paddingInline: { xs: 0, sm: 1, md: 2, lg: 10, xl: 10 }, paddingBottom:3 }}>
                <div id="hizmetlerimiz">
                    <Services />
                </div>
                <div id="calismalarimiz">
                    <Working />
                </div>
                <div id="teklifal">
                    <Offer />
                </div>
            </Box>
            <div id="iletisim">
                <Footer/>
            </div>
        </>
    );
}

export default Index;