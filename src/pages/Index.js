import React, { useEffect, useState } from "react";
import Home from "./Home";
import Services from "./Services";
import { Container } from "@mui/material";

const Index = () => {
    return (
        <>
            <div id="home">
                <Home />
            </div>
            <div id="services">
                <Services/>
            </div>
        </>
    );
}

export default Index;