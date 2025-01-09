import { Hero } from "./hero.tsx";
import { Background } from "./background.tsx";
// import { Venue } from "./venue.tsx";
import { Details } from "./details.tsx";
// import { Schedule } from "./schedule.tsx";
// import { Speakers } from "./speakers.tsx";

export default function MTAConf2025() {
	return (
		<div className="bg-yellow-100" id="mtaconf2025">
			<div className="relative overflow-hidden">
				<div className="bg-yellow-100">
					<Hero />
					<section id="below-the-fold">
						<Background />
						{/* <Venue /> */}
						<Details />
						{/* <Schedule /> */}
						{/* <Speakers /> */}
					</section>
				</div>
			</div>
		</div>
	);
}
