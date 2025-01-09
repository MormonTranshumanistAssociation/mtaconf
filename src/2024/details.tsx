export function Details() {
	return (
		<div className="py-12 xl:py-16 px-4 sm:px-6 lg:pt-20 lg:px-8 bg-black overflow-hidden">
			<div className="max-w-max lg:max-w-7xl mx-auto">
				<div className="relative z-10 mb-4 md:mb-2 md:px-6">
					<div className="text-base max-w-prose lg:max-w-none">
						<h2 className="leading-6 text-gray-600 font-semibold tracking-wide uppercase pt-8">
							EVENT DETAILS
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-100 bg-black sm:text-4xl">
							Join the discussion
						</p>
					</div>
				</div>
				<div className="relative">
					<div className="relative md:bg-black md:p-6">
						<div className="lg:grid lg:grid-cols-2 lg:gap-6">
							<div className="prose prose-indigo text-gray-300 lg:max-w-none gap-4 leading-7">
								<p>
									The 2024 conference of the Mormon Transhumanist Association
									will explore the aforementioned topics and others related to
									artificial intelligence and machine learning, including:
								</p>
								<ul className="ml-8 list-disc my-4 marker:text-gray-300">
									<li className="pl-2">
										Natural language processing (NLP), speech processing, speech
										generation, computer vision, robotics, neural networks and
										deep learning, cognitive computing, affective computing,
										reinforcement learning, edge AI.
									</li>
									<li className="pl-2">
										Fairness and bias; transparency, intelligibility, and
										explainability; accountability and responsibility; privacy
										and surveillance; human-robot interaction; employment and
										economic impact; value alignment; autonomous agent systems;
										global and cultural impacts; impacts on education; impacts
										on democracy and elections; environmental impact;
										existential risks; regulation; accelerationism; future
										shock.
									</li>
									<li className="pl-2">
										Consciousness and sentience; agency and autonomy; embodiment
										and situatedness; philosophy of mind; personhood and rights;
										intentionality and meaning; knowledge and epistemology; the
										simulation hypothesis; the nature of creativity; the Chinese
										Room Argument; free will and determinism; the nature of
										intelligence; posthumanism.
									</li>
									<li className="pl-2">
										Mormon theology and its implications for AI, including
										substance monism; the nature of miracles; embracing truth
										from all spheres; ecumenism; possibilism; compatibilism;
										modes of creation; the nature of agency; freedom and
										compulsion; relative perfection; eternal progression;
										superhumanity; theosis, deification, divinization,
										exaltation; AI as a form of spiritual creation; governance
										and consensus-building;{" "}
										<a href="https://new-god-argument.com/">
											The New God Argument
										</a>
										.
									</li>
								</ul>
							</div>
							<div className="mt-6 prose prose-indigo text-gray-300 lg:mt-0 leading-7 flex flex-col gap-4">
								<p>
									The conference will take place on Saturday, 13 April 2024 at
									the Provo Marriot Hotel and Convention Center from 9am to 6pm,
									followed by a catered dinner. We invite members and interested
									guests to submit papers for presentation at the conference.
									Papers should be submitted no later than 15 Feb 2024 to{" "}
									<a href="mailto:conference-papers@transfigurism.org">
										conference-papers@transfigurism.org
									</a>
									.
								</p>
								<p>
									Papers should be targeted at an educated but non-expert
									audience. Accepted authors will be assigned a presentation
									duration of either nine or eighteen minutes. 50% travel
									reimbursement is available to accepted presenters who are
									voting members of the Association and live more than 300 miles
									from Provo.
								</p>
								<p>
									Special group discount rates for the conference are available
									at the Provo Marriott Hotel (see above). Lodging assistance is
									also available with local Association members. Contact{" "}
									<a href="mailto:conference-lodging@transfigurism.org">
										conference-lodging@transfigurism.org
									</a>{" "}
									for help coordinating a place to stay while you attend the
									conference from out of town.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
