export function Venue() {
	return (
		<div className="mt-10 pb-16 bg-gradient-to-r from-emerald-700 to-orange-400 lg:pb-0 lg:z-10 lg:relative">
			<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
				<div className="relative lg:-my-8">
					<div className="mx-auto max-w-md p-0 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
						<div className="aspect-w-10 aspect-h-6 sm:rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
							<img
								className="object-cover lg:h-full lg:w-full"
								src="/img/2025/compass.jpeg"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
					<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
						<blockquote>
							<div>
								<p className="pb-6 text-4xl font-bold text-yellow-100">
									Conference Date and Location
								</p>
								<p className="text-2xl font-medium text-yellow-100 pb-0 mb-0">
									Saturday, 18 October 2025 • 9am - 6pm
								</p>
								<p className="mt-0 pt-0 font-sm text-yellow-100">
									Optional social dinner immediately following
								</p>
								<p className="mt-8 text-2xl font-medium text-yellow-100">
									The Compass Gallery and Event Center
								</p>
							</div>
							<div className="flex flex-col gap-0">
								<div className="text-base font-medium text-yellow-100">
									250 West Center Street
								</div>
								<div className="text-base font-medium text-yellow-100">
									Provo, UT 84601
								</div>
								<div className="text-base font-medium text-yellow-100">
									801-200-3981
								</div>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
}
