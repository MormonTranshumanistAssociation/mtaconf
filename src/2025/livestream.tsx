import { useState, useEffect, useRef, useCallback } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/sea/index.css";

// Replace with your actual Lambda function URL
const PASSWORD_VERIFY_URL =
	"https://duwawuyutcuguk7q76mlnbfasi0ylcsc.lambda-url.us-west-2.on.aws/";

interface LivestreamProps {
	streamUrl?: string;
	fallbackMessage?: string;
}

export function Livestream({
	fallbackMessage = "Livestream will be available during the conference",
}: LivestreamProps) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [streamStatus, setStreamStatus] = useState<
		"loading" | "live" | "offline"
	>("loading");
	const [signedStreamUrl, setSignedStreamUrl] = useState<string | null>(null);
	const videoRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<ReturnType<typeof videojs> | null>(null);

	// Function to get a signed stream URL from Lambda
	const getSignedStreamUrl = useCallback(async (): Promise<string | null> => {
		try {
			const response = await fetch(PASSWORD_VERIFY_URL, {
				method: "GET",
				credentials: "include", // Include cookies
			});

			const data = await response.json();

			if (data.success && data.streamUrl) {
				return data.streamUrl;
			}
			console.error("Failed to get signed stream URL:", data.error);
			return null;
		} catch (error) {
			console.error("Error getting signed stream URL:", error);
			return null;
		}
	}, []);

	// Check if user is already authenticated on component mount
	useEffect(() => {
		const authStatus = sessionStorage.getItem("livestream_authenticated");
		if (authStatus === "true") {
			setIsAuthenticated(true);
			// Get signed URL when already authenticated
			getSignedStreamUrl().then((url) => {
				if (url) {
					setSignedStreamUrl(url);
				}
			});
		}
	}, [getSignedStreamUrl]);

	// Initialize Video.js player when authenticated and signed URL is available
	useEffect(() => {
		if (
			isAuthenticated &&
			signedStreamUrl &&
			videoRef.current &&
			!playerRef.current
		) {
			const videoElement = document.createElement("video-js");
			videoElement.className = "vjs-default-skin";
			videoElement.setAttribute("data-setup", "{}");
			videoRef.current.appendChild(videoElement);

			const player = videojs(videoElement, {
				controls: true,
				responsive: true,
				fluid: true,
				html5: {
					hls: {
						enableLowInitialPlaylist: true,
						smoothQualityChange: true,
						overrideNative: true,
					},
				},
				sources: [
					{
						src: signedStreamUrl,
						type: "application/x-mpegURL",
					},
				],
				poster: "", // No poster for live stream
				liveui: true,
				liveTolerance: 20,
			});

			player.ready(() => {
				setStreamStatus("live");
			});

			player.on("error", (e: Event) => {
				console.error("Video.js error:", e);
				setStreamStatus("offline");
			});

			player.on("loadstart", () => {
				setStreamStatus("loading");
			});

			player.on("canplay", () => {
				setStreamStatus("live");
			});

			playerRef.current = player;
		}

		return () => {
			if (playerRef.current) {
				playerRef.current.dispose();
				playerRef.current = null;
			}
		};
	}, [isAuthenticated, signedStreamUrl]);

	// Check stream availability
	useEffect(() => {
		if (isAuthenticated && signedStreamUrl) {
			const checkStream = async () => {
				try {
					const response = await fetch(signedStreamUrl, { method: "HEAD" });
					if (response.ok) {
						setStreamStatus("live");
					} else {
						setStreamStatus("offline");
					}
				} catch (error) {
					console.error("Stream check failed:", error);
					setStreamStatus("offline");
				}
			};

			checkStream();
			const interval = setInterval(checkStream, 30000); // Check every 30 seconds
			return () => clearInterval(interval);
		}
	}, [isAuthenticated, signedStreamUrl]);

	const handlePasswordSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			const response = await fetch(PASSWORD_VERIFY_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include", // Include cookies
				body: JSON.stringify({ password }),
			});

			const data = await response.json();

			if (data.success) {
				setIsAuthenticated(true);
				sessionStorage.setItem("livestream_authenticated", "true");
				// Store the signed stream URL from the response
				if (data.streamUrl) {
					setSignedStreamUrl(data.streamUrl);
				}
				// The device cookie is automatically set by the server
			} else {
				setError(data.error || "Invalid password. Please try again.");
			}
		} catch (error) {
			console.error("Password submission error:", error);
			setError("Network error. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleLogout = () => {
		setIsAuthenticated(false);
		sessionStorage.removeItem("livestream_authenticated");
		setPassword("");
		setSignedStreamUrl(null);
	};

	if (isAuthenticated) {
		return (
			<div className="relative bg-yellow-100 min-h-screen w-full pt-16 pb-16 px-4 sm:px-6 md:px-12 lg:px-16">
				<div className="mx-auto pb-8 text-center max-w-7xl">
					<div className="flex justify-between items-center mb-6">
						<div className="flex items-center space-x-4">
							<p className="text-left mt-0 text-3xl font-extrabold text-green-600 tracking-tight sm:text-4xl">
								Conference Livestream
							</p>
							<div className="flex items-center space-x-2">
								{streamStatus === "live" && (
									<div className="flex items-center space-x-1">
										<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
										<span className="text-sm text-red-600 font-medium">
											LIVE
										</span>
									</div>
								)}
								{streamStatus === "loading" && (
									<div className="flex items-center space-x-1">
										<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
										<span className="text-sm text-yellow-600 font-medium">
											Loading...
										</span>
									</div>
								)}
								{streamStatus === "offline" && (
									<div className="flex items-center space-x-1">
										<div className="w-2 h-2 bg-gray-500 rounded-full" />
										<span className="text-sm text-gray-600 font-medium">
											Offline
										</span>
									</div>
								)}
							</div>
						</div>
						<button
							type="button"
							onClick={handleLogout}
							className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
						>
							Logout
						</button>
					</div>

					<div className="bg-white rounded-lg shadow-lg p-6">
						<div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
							{streamStatus === "offline" ? (
								<div className="flex items-center justify-center h-full text-center text-white">
									<div>
										<div className="text-6xl mb-4">📺</div>
										<div className="text-2xl font-bold mb-4">
											Stream Offline
										</div>
										<p className="text-gray-300 mb-4">{fallbackMessage}</p>
										<p className="text-sm text-gray-400">
											The stream will automatically appear when it goes live.
										</p>
									</div>
								</div>
							) : (
								<div ref={videoRef} className="w-full h-full" />
							)}
						</div>

						{streamStatus === "live" && (
							<div className="mt-4 text-center">
								<p className="text-sm text-gray-600">
									🎥 Live streaming from MTAConf 2025
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="relative bg-yellow-100 min-h-screen w-full pt-16 pb-16 px-4 sm:px-6 md:px-12 lg:px-16">
			<div className="mx-auto pb-8 text-center max-w-7xl">
				<p className="text-left mt-0 text-3xl font-extrabold text-green-600 tracking-tight sm:text-4xl">
					Conference Livestream
				</p>

				<div className="mt-8 max-w-md mx-auto">
					<div className="bg-white rounded-lg shadow-lg p-8">
						<div className="text-center mb-6">
							<div className="text-6xl mb-4">🔒</div>
							<h2 className="text-2xl font-bold text-gray-900 mb-2">
								Access Required
							</h2>
							<p className="text-gray-600">
								Enter your subscriber password to access the livestream
							</p>
						</div>

						<form onSubmit={handlePasswordSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
									placeholder="Enter your password"
									required
									disabled={isLoading}
								/>
							</div>

							{error && (
								<div className="text-red-600 text-sm text-center">{error}</div>
							)}

							<button
								type="submit"
								disabled={isLoading || !password.trim()}
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isLoading ? (
									<div className="flex items-center">
										<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
										Verifying...
									</div>
								) : (
									"Access Livestream"
								)}
							</button>
						</form>

						<div className="mt-6 text-center">
							<p className="text-sm text-gray-500">
								Don't have access?{" "}
								<a
									href="https://www.ticketsource.us/mormon-transhumanist-association"
									className="text-blue-500"
								>
									Register
								</a>{" "}
								for a remote pass.{" "}
								<a
									href="mailto:contact@transfigurism.org"
									className="text-blue-500"
								>
									Contact us
								</a>{" "}
								if you experience any issues.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
