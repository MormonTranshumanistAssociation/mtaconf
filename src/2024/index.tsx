import { Hero } from "./hero.tsx";
import { Background } from "./background.tsx";

export default function MTAConf2024() {
  return (
    <div className="bg-black">
      <div>
        <div className="relative overflow-hidden">
          <div className="bg-black">
            <Hero />
            <section id="below-the-fold">
              <Background />
              {/*<Venue />*/}
              {/*<Details />*/}
              {/*<Lodging />*/}
              {/*<Schedule />*/}
              {/*<Speakers />*/}
              {/*<Footer />*/}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
