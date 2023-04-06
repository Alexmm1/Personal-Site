import React from "react";
import { Outlet } from "react-router-dom";
import {Navbar} from "./";
import {Footer} from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar/>
            <Footer/>
            <Outlet/>
        </div>
    )
}

export default Main;