import React from "react";
import ReactDOM from "react-dom/client";
import {
	Outlet,
	createBrowserRouter,
	RouterProvider,
	useLocation,
} from "react-router-dom";
import MTAConf2022 from "./2022";
import MTAConf2024 from "./2024";
import MTAConf2025 from "./2025";
import MTAConf2026 from "./2026";
import { Livestream } from "./2025/livestream";
import "./index.css";

function ScrollToHash() {
	const { hash } = useLocation();
	React.useEffect(() => {
		if (hash) {
			const el = document.querySelector(hash);
			if (el) el.scrollIntoView({ behavior: "smooth" });
		}
	}, [hash]);
	return <Outlet />;
}

const router = createBrowserRouter([
	{
		element: <ScrollToHash />,
		children: [
			{
				path: "/2022",
				element: <MTAConf2022 />,
			},
			{
				path: "/2024",
				element: <MTAConf2024 />,
			},
			{
				path: "/2025",
				element: <MTAConf2025 />,
			},
			{
				path: "/",
				element: <MTAConf2026 />,
			},
			{
				path: "/livestream",
				element: <Livestream />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
