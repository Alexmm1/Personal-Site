import React from "react";
import { Outlet } from "react-router-dom";
import {Navbar} from "./Navbar";
import {About} from "./about";

const Main = () => {
    return(
        <div id="main">
            <Navbar/>
            <About/>
        </div>
    )
}

export default Main