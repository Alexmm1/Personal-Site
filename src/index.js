import React from "react";
import ReactDOM from "react-dom/client";
import { Main, About, Portfolio, Index } from "./components";

import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	BrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Main />}>
				<Route path="index" element={<Index />} />
					<Route path="About" element= {<About />}/>
					<Route path="Portfolio" element={<Portfolio />} />
				
			</Route>
		</>
	)
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);