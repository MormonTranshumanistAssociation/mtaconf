import { Link } from "react-router-dom";
import { Portrait } from "./teaser.tsx";
import { pastConferences } from "../past-conferences.ts";

export function Hero() {
	return (
		<section>
			<div className="m-4 h-20 grid grid-cols-8 items-center justify-center text-stone-600 text-xs gap-2 sm:h-0 sm:flex sm:flex-row">
				<div className="col-span-8">Previous years:</div>
				{pastConferences.map((conf) =>
					conf.link.match(/^http/) ? (
						<Link
							key={conf.year}
							className="underline hover:no-underline text-stone-500"
							to={conf.link}
						>
							{conf.year}
						</Link>
					) : (
						<a
							key={conf.year}
							href={conf.link}
							className="underline hover:no-underline text-stone-500"
						>
							{conf.year}
						</a>
					),
				)}
			</div>
			<header className="">
				<div className="w-full bg-[url('/img/2025/hero.jpg')] bg-cover bg-top bg-no-repeat">
					<div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center sm:items-start sm:justify-between mx-10 pt-20 sm:pt-6 min-h-[500px] px-10">
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-6 bg-black/50 pb-6 rounded-xl sm:rounded-none sm:bg-transparent">
								<a
									href="https://transfigurism.org"
									className="self-center sm:self-start"
								>
									<img
										className="h-36 w-auto hidden sm:block"
										src="/img/2025/mta-logo.svg"
										alt="Mormon Transhumanist Association"
									/>
								</a>
							</div>
							<div className="grid grid-cols-3 justify-items-stretch gap-0 -mx-4">
								<Portrait
									image="/img/2025/michael-ferguson.jpg"
									name="Michael Ferguson"
									title1="Neuroscientist"
									title2="Science Keynote"
								/>
								<Portrait
									image="/img/2025/randal-koene.jpg"
									name="Randal Koene"
									title1="Neuroscientist"
									title2="Transhumanist Keynote"
								/>
								<Portrait
									image="/img/2025/thomas-mcconkie.jpg"
									name="Thomas McConkie"
									title1="Author & Meditation Teacher"
									title2="Mormon Keynote"
								/>
							</div>
						</div>
						<div className="max-w-sm">
							<div className="py-6 px-6 backdrop-blur-sm rounded-xl bg-black/50 sm:bg-black/25 mb-8 sm:mb-0">
								<div className="container flex-col">
									<div className="">
										<h1 className="text-md sm:text-xl tracking-tight">
											<span className="block font-extrabold text-yellow-200">
												Announcing MTAConf 2025
											</span>
											<span className="py-4 text-2xl sm:text-4xl font-serif italic block bg-clip-text text-transparent bg-gradient-to-t sm:bg-gradient-to-r from-yellow-200 to-orange-400 sm:pb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
												Transformation through Renewal of the Mind
											</span>
										</h1>
										<p className="py-3 text-sm text-yellow-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-md">
											Scientific research and spiritual practices have revealed
											new frontiers in cognitive enhancement. Explore the
											intersection of science and spirituality at MTAConf 2025.
										</p>
										<div className="mt-3 text-md sm:text-xl tracking-tight font-extrabold text-yellow-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
											October 18, 2025
										</div>
										<div className="mt-4 sm:mt-6">
											<div className="sm:flex">
												<div className="min-w-0 flex-1">
													<a href="https://www.ticketsource.us/mormon-transhumanist-association">
														<button
															type="submit"
															className="py-3 w-full rounded-md shadow bg-gradient-to-r from-amber-200 to-orange-400 text-orange-800 font-medium hover:from-amber-100 hover:to-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 focus:ring-offset-amber-900"
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
