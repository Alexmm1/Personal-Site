import React from "react";
import { Outlet } from "react-router-dom";
import {Navbar} from "./";
import {Portfolio} from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar/>
            <Portfolio/>
            <Outlet/>
        </div>
    )
}

export default Main;