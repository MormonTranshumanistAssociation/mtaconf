export function Schedule() {
	return (
		<div
			id="schedule"
			className="py-12 lg:pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-indigo-900"
		>
			<div className="max-w-max lg:max-w-7xl mx-auto">
				<div className="relative z-10 mb-4 md:mb-2 md:px-6">
					<div className="text-base max-w-prose lg:max-w-none">
						<h2 className="leading-6 text-indigo-400 font-semibold tracking-wide uppercase">
							Schedule
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-rose-50 sm:text-4xl">
							Weekend Itinerary
						</p>
					</div>
				</div>
				<div className="relative md:p-6 flex flex-col gap-12">
					<DaySchedule
						title="Friday, April 10"
						rows={[
							{ time: "4:00 PM", description: "Check-in / Setup" },
							{ time: "6:00 PM", description: "Open Hour" },
							{ time: "7:00 PM", description: "Dinner" },
							{ time: "8:30 PM", description: "Group Activities" },
						]}
					>
						<div className="mt-4 text-sm text-slate-300">
							<p className="font-medium text-rose-100 mb-2">
								Evening activities available:
							</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>Meditation / Yin Yoga — Basement Living Room</li>
								<li>
									Group Circle — Main Floor Living Room or Outside
								</li>
								<li>
									Game Room (Pool Table, Ping Pong, etc.) — Garage
								</li>
								<li>
									Hot Tub (limit 6 people) — Basement Backyard
								</li>
							</ul>
						</div>
						<p className="mt-4 text-sm text-slate-400">
							Shuttle service available Friday afternoon and evening.
							Call{" "}
							<a
								href="tel:385-444-8614"
								className="underline hover:no-underline text-slate-300"
							>
								385-444-8614
							</a>{" "}
							for pickup.
						</p>
					</DaySchedule>

					<DaySchedule
						title="Saturday, April 11"
						rows={[
							{ time: "7:00 AM", description: "Breakfast" },
							{ time: "9:00 AM", description: "Breakfast Closes" },
							{ time: "10:00 AM", description: "Open Hour" },
							{ time: "11:00 AM", description: "Group Hike" },
							{ time: "1:00 PM", description: "Lunch" },
							{ time: "2:00 PM", description: "Open Hour" },
							{
								time: "3:00 PM",
								description:
									"MTA Leadership Remarks: Lincoln Cannon, Ben Blair, Chris Bradford, and Carl Youngblood",
							},
							{ time: "6:00 PM", description: "Dinner" },
							{
								time: "8:30 PM",
								description: "\u201COpen Mic\u201D Show and Tell",
							},
							{ time: "10:00 PM", description: "Open Hour" },
							{ time: "11:00 PM", description: "Quiet Hours Start" },
						]}
					/>

					<DaySchedule
						title="Sunday, April 12"
						rows={[
							{ time: "7:00 AM", description: "Breakfast" },
							{ time: "9:00 AM", description: "Breakfast Closes" },
							{ time: "10:00 AM", description: "Check-out" },
						]}
					/>
				</div>
			</div>
		</div>
	);
}

function DaySchedule({
	title,
	rows,
	children,
}: {
	title: string;
	rows: { time: string; description: string }[];
	children?: React.ReactNode;
}) {
	return (
		<div>
			<h3 className="text-2xl font-bold text-rose-100 mb-4">{title}</h3>
			<div className="not-prose relative bg-slate-900/70 rounded-xl overflow-hidden">
				<div className="relative rounded-xl overflow-auto">
					<div className="shadow-sm overflow-hidden my-4">
						<table className="border-collapse table-auto w-full text-sm">
							<thead>
								<tr className="bg-rose-900/40">
									<th className="border-b border-rose-100/20 font-medium p-4 pl-8 pt-3 pb-3 text-rose-100 text-left">
										Time
									</th>
									<th className="border-b border-rose-100/20 font-medium pl-2 pr-8 pt-3 pb-3 text-rose-100 text-left">
										Description
									</th>
								</tr>
							</thead>
							<tbody className="text-left">
								{rows.map((row) => (
									<tr key={row.time}>
										<td className="whitespace-nowrap border-b border-slate-700/50 p-2 pl-8 text-rose-50">
											{row.time}
										</td>
										<td className="border-b border-slate-700/50 p-2 pr-8 text-rose-50/80">
											{row.description}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="absolute inset-0 pointer-events-none border border-rose-100/10 rounded-xl" />
			</div>
			{children}
		</div>
	);
}
