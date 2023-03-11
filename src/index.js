import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, Main, About, Portfolio, Index } from "./components";

import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	BrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<BrowserRouter>
			<Route path="/" element={<Navbar />}>
				<Route path="index" element={<Index />} />
				<Route path="About">
				<Route index element={<About />} />
				<Route path="Portfolio" element={<Portfolio />} />
				</Route>
			</Route>
		</BrowserRouter>
	)
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);