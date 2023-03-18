import React from "react";
import { Outlet } from "react-router-dom";
import {Navbar, Portfolio, Index, About} from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar/>
            <Index/>
            <About/>
            <Portfolio/>
            <Outlet/>
        </div>
    )
}

export default Main;