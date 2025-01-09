import { Hero } from "./hero-archive.tsx";
import { Background } from "./background.tsx";
import { Venue } from "./venue.tsx";
import { Details } from "./details.tsx";
import { Schedule } from "./schedule.tsx";
import { Speakers } from "./speakers.tsx";

export default function MTAConf2024() {
	return (
		<div className="bg-black" id="mtaconf2024">
			<div className="relative overflow-hidden">
				<div className="bg-black">
					<Hero />
					<section id="below-the-fold">
						{/*<Teaser />*/}
						<Background />
						<Venue />
						<Details />
						<Schedule />
						<Speakers />
						{/*<Footer />*/}
					</section>
				</div>
			</div>
		</div>
	);
}
