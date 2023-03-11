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
		<BrowserRouter>
			<Route path="/" element={<Main />}>
				<Route path="about" element={<About />} />
				<Route path="index">
					<Route index element={<Index />} />
					<Route path=":id" element={<Portfolio />} />
				</Route>
			</Route>
		</BrowserRouter>
	)
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);