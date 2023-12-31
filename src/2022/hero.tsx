import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import NET from "vanta/dist/vanta.net.min";

export function Hero() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0f766e,
          backgroundColor: 0x111827,
        }),
      );
    }
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      if (vantaEffect) {
        // @ts-expect-error
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <section ref={myRef}>
      <header className="pt-4 sm:pt-6 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <a href="https://transfigurism.org" className="hidden lg:table-cell">
            <img
              className="h-32 w-auto pt-2 pb-6"
              src="/img/2022/mta-white-on-transparent-1080.png"
              alt="Mormon Transhumanist Association"
            />
          </a>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <a
                href="https://transfigurism.org"
                className="sm:flex sm:flex-row sm:justify-center sm:items-center lg:hidden"
              >
                <img
                  className="h-32 w-auto pt-2 pb-6"
                  src="/img/2022/mta-white-on-transparent-1080.png"
                  alt="Mormon Transhumanist Association"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="pt-4 pb-12 sm:pt-6 lg:pt-6 lg:pb-20 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="container flex-col">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Announcing</span>
                    <span className="pb-2 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-2">
                      MTAConf 2022: Decentralization of Power
                    </span>
                  </h1>
                  <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                    Distributed technologies and new forms of governance are
                    restoring power to individuals and communities. Learn from
                    world experts how you can take part in this decentralized
                    future.
                  </p>
                  <div className="mt-6 sm:mt-8 text-4xl tracking-tight font-extrabold text-white">
                    March 19, 2022
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <a href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYAfYH4ZRbuX8mC4thnaQo3M">
                          <button
                            type="submit"
                            className="py-3 px-20 lg:px-28 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                          >
                            View presentations
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl py-10 sm:px-6 lg:px-0 lg:flex lg:items-center lg:justify-center">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
                <div className="container flex-col">
                  <img
                    className="rounded-lg w-full h-auto"
                    src="/img/2022/laura.jpg"
                    alt="Laura Shin"
                  />
                  <p className="text-gray-300 rounded-lg font-bold text-2xl pt-4">
                    Laura Shin
                  </p>
                  <p className="text-gray-300 rounded-lg text-lg">
                    award-winning journalist, podcast host, and author
                  </p>
                </div>
                <div className="container flex-col">
                  <img
                    className="rounded-lg w-full h-auto"
                    src="/img/2022/tomicah.jpg"
                    alt="Tomicah Tillemann"
                  />
                  <p className="w-full text-gray-300 rounded-lg font-bold text-2xl pt-4">
                    Tomicah Tillemann
                  </p>
                  <p className="text-gray-300 rounded-lg text-lg ">
                    blockchain public policy expert
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-lg text-gray-300">
            <p className="p-6 w-60">
              <em>
                The first 200 registered attendees get a free copy of Laura's
                book
              </em>
            </p>
            <div className="w-36">
              <a href="https://bit.ly/cryptopians">
                <img
                  className="w-full h-auto"
                  src="/img/2022/cryptopians.jpeg"
                  alt="The Cryptopians book"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
