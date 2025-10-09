import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MTAConf2022 from "./2022";
import MTAConf2024 from "./2024";
import MTAConf2025 from "./2025";
import { Livestream } from "./2025/livestream";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/2022",
		element: <MTAConf2022 />,
	},
	{
		path: "/2024",
		element: <MTAConf2024 />,
	},
	{
		path: "/",
		element: <MTAConf2025 />,
	},
	{
		path: "/livestream",
		element: <Livestream />,
	},
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
