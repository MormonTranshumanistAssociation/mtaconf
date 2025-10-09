export function Details() {
	return (
		<div
			id="details"
			className="px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pt-8 xl:pb-16  bg-yellow-100 overflow-hidden"
		>
			<div className="max-w-max lg:max-w-7xl mx-auto">
				<div className="relative z-10 mb-4 md:mb-2 md:px-6">
					<div className="text-base max-w-prose lg:max-w-none">
						<h2 className="leading-6 text-orange-400 font-semibold tracking-wide uppercase pt-8">
							EVENT DETAILS
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-600 sm:text-4xl">
							Join the discussion
						</p>
					</div>
				</div>
				<div className="relative">
					<div className="relative md:p-6">
						<div className="lg:grid lg:grid-cols-2 lg:gap-6">
							<div className="prose prose-indigo text-green-600 lg:max-w-none gap-4 leading-7">
								<p>
									The 2025 conference of the Mormon Transhumanist Association
									will explore the aforementioned topics and others related to
									transformation through the renewal of the mind, including:
								</p>
								<ul className="ml-8 list-disc my-4 marker:text-green-600">
									<li className="pl-2">
										<strong>Spiritual and Cognitive Transformation</strong>: How
										religious traditions and scientific advancements can
										influence and enhance mental and spiritual well-being.
									</li>
									<li className="pl-2">
										<strong>
											Mindfulness and the Future of Human Consciousness
										</strong>
										: Exploring how practices of mindfulness and meditation,
										coupled with emerging brain technologies, can contribute to
										the renewal of the mind.
									</li>
									<li className="pl-2">
										<strong>Transhumanism and the Renewal of the Mind</strong>:
										Investigating the ways in which transhumanist ideals and
										technologies (e.g., brain-computer interfaces, artificial
										intelligence) offer opportunities for cognitive and
										spiritual enhancement.{" "}
									</li>
									<li className="pl-2">
										<strong>Neuroplasticity and Faith</strong>: The science of
										neuroplasticity in relation to spiritual practices and how
										they shape our thoughts, behaviors, and sense of self.
									</li>
									<li className="pl-2">
										<strong>
											Renewal of the Mind in Religious and Secular Contexts
										</strong>
										: How different faith traditions and secular philosophies
										view the concept of the renewal of the mind, and how these
										perspectives can inform our approach to human
										transformation.
									</li>
								</ul>
							</div>
							<div className="mt-6 prose prose-indigo text-green-600 lg:mt-0 leading-7 flex flex-col gap-4">
								<h3 className="text-2xl font-bold">Call for Papers</h3>
								<p>
									The conference venue is yet to be announced. We invite members
									and interested guests to submit papers for presentation at the
									conference.{" "}
									<strong>
										Proposals should be submitted no later than 10 August 2025
									</strong>{" "}
									to{" "}
									<a href="mailto:conference-papers@transfigurism.org">
										conference-papers@transfigurism.org
									</a>
									. Proposals should include a 300-word abstract, a brief
									biography of the presenter(s), and any technical requirements
									for the presentation.
								</p>
								<p>
									Presentations should be targeted at an educated but non-expert
									audience. Accepted authors will be assigned a presentation
									duration of either nine or eighteen minutes. 50% travel
									reimbursement is available to accepted presenters who are
									voting members of the Association and live more than 300 miles
									from Provo.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
