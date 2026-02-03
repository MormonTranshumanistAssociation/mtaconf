import { Hero } from "./hero.tsx";
import { Background } from "./background.tsx";
import { Venue } from "./venue.tsx";

export default function MTAConf2026() {
	return (
		<div className="bg-slate-900" id="mtaconf2026">
			<div className="relative overflow-hidden">
				<Hero />
				<section id="below-the-fold">
					<Background />
					<Venue />
				</section>
			</div>
		</div>
	);
}
