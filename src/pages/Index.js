import React, { useEffect, useState } from "react";
import Home from "./Home";
import Services from "./Services";
import Working from "./Working";
import Offer from './Offer';
import Footer from "./Footer";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import { Box } from '@mui/material';
import { scroller } from "react-scroll";

const Index = () => {
    useEffect(() => {
        const target = sessionStorage.getItem("scrollTarget");
        if (target) {
            scroller.scrollTo(target, {
                smooth: true,
                duration: 600,
                offset: -70,
            });
            sessionStorage.removeItem("scrollTarget");
        }
    }, []);
    return (
        <>
            <div id="anasayfa">
                <Home />
            </div>
            <Box sx={{ paddingInline: { xs: 0, sm: 1, md: 2, lg: 10, xl: 10 }, paddingBottom: 3 }}>
                <div id="hizmetlerimiz">
                    <Services />
                </div>
                <div id="calismalarimiz">
                    <Working />
                </div>
                <div id="teklifal">
                    <Offer />
                </div>
                <div id="sss">
                    <FrequentlyAskedQuestions />
                </div>
            </Box>
            <div id="iletisim">
                <Footer />
            </div>
        </>
    );
}

export default Index;