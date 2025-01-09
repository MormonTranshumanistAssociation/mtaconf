export function Schedule() {
	return (
		<div className="relative bg-white py-8 sm:py-24 md:py-6 lg:py-12">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<p className="mt-20 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
					Schedule
				</p>
				<div className="mt-4 -mb-3">
					<div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden">
						<div
							style={{ backgroundPosition: "10px 10px" }}
							className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"
						/>
						<div className="relative rounded-xl overflow-auto">
							<div className="shadow-sm overflow-hidden my-8">
								<table className="border-collapse table-auto w-full text-sm">
									<thead>
										<tr>
											<th className="border-b border-grey-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
												Time
											</th>
											<th className="border-b border-grey-600 font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
												Description
											</th>
											<th className="border-b border-grey-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
												Speaker
											</th>
										</tr>
									</thead>
									<tbody className="bg-white text-left">
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												8:30 am
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Pre-conference check-in
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												9:00 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Welcome
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Connie Packer
												<br />
												MTA Vice-President
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												9:05 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Web3 and the Promise of Decentralized Governance
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Carl Youngblood
												<br />
												MTA President
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												9:30 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Immunology for the Internet Age
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Dr. Neal Davis
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												9:50 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												The Importance of Regulatory Clarity and American
												Leadership in the Web3 Era
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Evan McMullin
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												10:00 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Little Democracies Everywhere: Empowering the Collective
												and Individuals (Keynote)
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Laura Shin
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												10:30 am
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Q&A
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												10:45 am
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Break
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												11:00 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Utah: Open for Innovation
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Dr. Suzanne Harrison, MD
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												11:10 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												The Future of Energy
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Dr. Matthew Memmott
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												11:30 am
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Charter Cities: Empowered Cities for the Urban Age
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Kurtis Lockhart
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												11:50 am
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Lunch in Ballroom
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												12:40 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Dealing on the Level: Can Provably Fair Trade Be a
												Technology of Spiritual Liberation?
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Vinay Gupta
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												1:00 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Decentralized Law in Practice
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Tom W. Bell
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												1:20 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												We are Wired to Connect: Privacy, Transparency & Hope
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Ally Isom
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												1:30 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Authority, Community, Faith, and Trust: First Principles
												for a Decentralized Future (Keynote)
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Dr. Tomicah Tillemann
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												2:00 pm
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Q&A
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												2:15 pm
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Break
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												2:25 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												The Decentralization of God
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Lincoln Cannon
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												2:40 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Psychedelic Medicine: Mental Health Therapies and
												Practices for a Decentralized World
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Joseph West
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												2:55 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Balancing Emergent and Hierarchical Governance at Church
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Jonathan Jardine
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												3:10 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												The Future of Religion is an API
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Jon Ogden
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												3:25 pm
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Break
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												3:30 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Blockchain: Surety and the Hope for a Better World
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Dr. Scott Stornetta
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												3:50 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Genesis Block: a Full-Service Banking Experience for the
												Digital Generation
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Sarah Wiley
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												4:00 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Strangleholds of School and the Path to Decentralized
												Education
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Dr. Ben Blair
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												4:20 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												The Things We Forgot—Or How Digital Communities Can
												Unload the Baggage of Modernity and Keep the Good Stuff
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												James Wigginton
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												4:40 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Harbergeorgism: Sustainable Economic Development for the
												Web3 Era
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Bernardo Vicente
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												5:00 pm
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Break
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												5:10 pm
											</td>
											<td className="border-b border-grey-100 p-4 text-slate-500">
												Panel Discussion with Laura Shin, Dr. Tomicah Tillemann,
												and Dr. Neal Davis
											</td>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pr-8 text-slate-500">
												Lincoln Cannon
												<br />
												Moderator
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												6:00 pm
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Break and Book Signing with Laura Shin in Bullock Room
											</td>
										</tr>
										<tr>
											<td className="whitespace-nowrap border-b border-grey-100 p-4 pl-8 text-slate-500">
												6:30 pm
											</td>
											<td
												className="border-b border-grey-100 p-4 text-slate-500"
												colSpan={2}
											>
												Dinner in Ballroom
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl" />
					</div>
				</div>
			</div>
		</div>
	);
}
