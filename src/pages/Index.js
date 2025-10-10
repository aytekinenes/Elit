import React, { useEffect, useState } from "react";
import Home from "./Home";
import Services from "./Services";
import Working from "./Working";
import Calculator from './Calculator'

const Index = () => {
    return (
        <>
            <div id="home">
                <Home />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="working">
                <Working />
            </div>
            <div id="calculator">
                <Calculator/>
            </div>
        </>
    );
}

export default Index;