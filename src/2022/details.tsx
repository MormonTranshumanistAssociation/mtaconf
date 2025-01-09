export function Details() {
	return (
		<div className="py-12 xl:py-16 px-4 sm:px-6 lg:pt-20 lg:px-8 bg-gray-50 overflow-hidden">
			<div className="max-w-max lg:max-w-7xl mx-auto">
				<div className="relative z-10 mb-4 md:mb-2 md:px-6">
					<div className="text-base max-w-prose lg:max-w-none">
						<h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
							EVENT DETAILS
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 bg-gray-50 sm:text-4xl">
							Join the discussion
						</p>
					</div>
				</div>
				<div className="relative">
					<svg
						className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="95e8f2de-6d30-4b7e-8159-f791729db21b"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width="404"
							height="384"
							fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
						/>
					</svg>
					<svg
						className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width="404"
							height="384"
							fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
						/>
					</svg>
					<div className="relative md:bg-gray-50 md:p-6">
						<div className="lg:grid lg:grid-cols-2 lg:gap-6">
							<div className="prose prose-indigo text-gray-500 lg:max-w-none gap-4 leading-7">
								<p>
									The 2022 annual conference of the Mormon Transhumanist
									Association will explore the aforementioned topics and others
									related to decentralization, including:
								</p>
								<ul className="ml-8 list-disc my-4 marker:text-gray-300">
									<li className="pl-2">
										Blockchain technology, distributed systems, conflict-free
										replicated data types (CRDTs), homomorphic encryption,
										cryptography, decentralized autonomous organizations (DAOs),
										offline first apps, tokenomics, decentralized applications
										(dapps), decentralized finance (DeFi)
									</li>
									<li className="pl-2">
										Fossil fuel divestment, renewable energy, advanced nuclear
										energy, advanced agriculture, decentralized infrastructure,
										telepresence, remote work, telecommuting
									</li>
									<li className="pl-2">
										Public policy, governance, international development,
										charter cities, good urbanism, mass transit
									</li>
									<li className="pl-2">
										Ethical and theological questions emerging from
										decentralization and governance, checks and balances,
										federalism and anti-federalism, democracy and
										representation, power sharing
									</li>
								</ul>
							</div>
							<div className="mt-6 prose prose-indigo text-gray-500 lg:mt-0 leading-7 flex flex-col gap-4">
								<p>
									The conference will take place on Saturday 19 Mar 2022 at the
									Provo City Library Ballroom from 9am to 6pm, followed by a
									catered dinner. We invite members and interested guests to
									submit papers for presentation at the conference. Papers
									should be submitted no later than 31 Jan 2022 to{" "}
									<a
										href="mailto:conference-papers@transfigurism.org"
										className="text-blue-600 font-semibold"
									>
										conference-papers@transfigurism.org
									</a>
									.
								</p>
								<p>
									Papers should be targeted at an educated but non-expert
									audience. Accepted authors should plan on preparing a
									compelling presentation of their paper that lasts no more than
									twenty minutes. 50% travel reimbursement is available to
									accepted presenters who are voting members of the Association
									and live more than 300 miles from Provo.
								</p>
								<p>
									Special group discount rates for the conference are available
									at the Provo Marriott Hotel (see below). Lodging assistance is
									also available with local Association members. Contact{" "}
									<a
										href="mailto:conference-lodging@transfigurism.org"
										className="text-blue-600 font-semibold"
									>
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
