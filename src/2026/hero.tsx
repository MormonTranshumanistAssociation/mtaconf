import { Link } from "react-router-dom";
import { pastConferences } from "../past-conferences.ts";

export function Hero() {
	return (
		<section id="hero">
			<div className="m-4 h-20 grid grid-cols-8 items-center justify-center text-slate-400 text-xs gap-2 sm:h-0 sm:flex sm:flex-row">
				<div className="col-span-8">Previous years:</div>
				{pastConferences.map((conf) =>
					conf.link.match(/^http/) ? (
						<a
							key={conf.year}
							href={conf.link}
							className="underline hover:no-underline text-slate-500"
						>
							{conf.year}
						</a>
					) : (
						<Link
							key={conf.year}
							className="underline hover:no-underline text-slate-500"
							to={conf.link}
						>
							{conf.year}
						</Link>
					),
				)}
			</div>
			<header>
				<div className="w-full bg-[url('/img/2026/hero.webp')] bg-cover bg-center bg-no-repeat">
					<div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center sm:items-start sm:justify-between mx-4 sm:mx-10 pt-20 sm:pt-6 min-h-[500px] px-4 sm:px-10">
						<div className="flex flex-col gap-8">
							<div className="flex flex-col min-w-60 gap-6 pb-6 rounded-xl sm:rounded-none sm:bg-transparent">
								<a
									href="https://transfigurism.org"
									className="self-center sm:self-start"
								>
									<img
										className="h-36 w-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
										src="/img/mta-logo.svg"
										alt="Mormon Transhumanist Association"
									/>
								</a>
							</div>
						</div>
						<div className="w-full max-w-md">
							<div className="py-6 px-6 backdrop-blur-sm rounded-xl bg-slate-900/60 mb-8 sm:mb-0">
								<div className="container flex-col">
									<div>
										<h1 className="text-md sm:text-xl tracking-tight">
											<span className="block font-extrabold text-rose-100">
												MTAConf 2026 — 20th Anniversary
											</span>
											<span className="py-4 text-3xl sm:text-4xl font-serif italic block bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-pink-200 sm:pb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
												Signs and Wonders
											</span>
										</h1>
										<p className="py-3 text-sm text-rose-100/90 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-md">
											Explore the miraculous at the intersection of faith and
											technology. Join us for a mountain retreat experience
											examining transcendent phenomena through both spiritual
											and scientific lenses.
										</p>
										<div className="mt-3 text-md sm:text-xl tracking-tight font-extrabold text-rose-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
											April 10-12, 2026
										</div>
										<div className="mt-1 text-sm text-rose-100/80 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
											Mountain Retreat • Morgan, UT
										</div>
										<div className="mt-4 sm:mt-6">
											<div className="sm:flex gap-3">
												<div className="min-w-0 flex-1">
													<a href="https://www.ticketsource.us/mormon-transhumanist-association">
														<button
															type="button"
															className="py-3 w-full rounded-md shadow bg-indigo-400/60 text-white font-medium hover:bg-indigo-300/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-slate-900 transition-colors"
														>
															Register Now
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</section>
	);
}
