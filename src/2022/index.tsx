import { Hero } from "./hero.tsx";
import { Background } from "./background.tsx";
import { Venue } from "./venue.tsx";
import { Details } from "./details.tsx";
import { Lodging } from "./lodging.tsx";
import { Schedule } from "./schedule.tsx";
import { Speakers } from "./speakers.tsx";
import { Footer } from "./footer.tsx";

export default function App() {
  return (
    <div>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <div className="bg-gray-900">
            <Hero />
            <section id="below-the-fold">
              <Background />
              <Venue />
              <Details />
              <Lodging />
              <Schedule />
              <Speakers />
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
