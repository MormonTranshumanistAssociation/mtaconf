export function Venue() {
	return (
		<div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
			<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
				<div className="relative lg:-my-8">
					<div
						aria-hidden="true"
						className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
					/>
					<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
						<div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
							<img
								className="object-cover lg:h-full lg:w-full"
								src="/img/2022/provo-library.jpeg"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
					<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
						<blockquote>
							<div>
								<p className="pb-6 text-4xl font-bold text-white">
									Conference Date and Location
								</p>
								<p className="text-2xl font-medium text-white">
									Saturday, 19 March 2022 • 9am - 6pm
								</p>
								<p className="text-2xl font-medium text-white">
									Provo City Library
								</p>
							</div>
							<div>
								<p className="text-base font-medium text-cyan-100">
									550 N University Ave
								</p>
								<p className="text-base font-medium text-cyan-100">
									Provo, UT 84601
								</p>
								<p className="pt-2 text-base font-medium text-cyan-100">
									Catered dinner immediately afterward
								</p>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
}
