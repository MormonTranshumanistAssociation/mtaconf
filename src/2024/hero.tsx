import {Link} from "react-router-dom";

export function Hero() {
  return (
    <section>
      <div
        className="flex flex-row items-center justify-center bg-black text-amber-500 text-xs h-8 gap-4">
        <div>Previous years:</div>
        <Link
          className="underline hover:no-underline text-amber-400"
              to="/2022">2022</Link>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYBrHWT9Pp63g9-9kl39MDT3"
          className="underline hover:no-underline text-amber-400">
          2020
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYCeq7gmtAZ8Onwjo7mc_jwC"
          className="underline hover:no-underline text-amber-400">
          2019
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYDrmGMtg7sMxx6nif_xe-Xw"
          className="underline hover:no-underline text-amber-400">
          2018
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYD5yZT_2EhDQqs8RFzfrTej"
          className="underline hover:no-underline text-amber-400">
          2017
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYAENAKyBT9lTZAvs_04IUpB"
          className="underline hover:no-underline text-amber-400">
          2016
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYCcswn8mi_UwgrGYOncImI0"
          className="underline hover:no-underline text-amber-400">
          2015
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYA8NwJNOxOs7eRKNmoyadP0"
          className="underline hover:no-underline text-amber-400">
          2014
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLbIPMPVrfXYDQjYsw9w2nl6gSdphMROV5"
          className="underline hover:no-underline text-amber-400">
          2013
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3893B119820E9DC1"
          className="underline hover:no-underline text-amber-400">
          2012
        </a>
      </div>
      <header className="">
        <div
          className="w-full h-[600px] bg-[url('/img/2024/mtaconf-2024-hero-01-regular.jpg')] bg-contain bg-no-repeat">
          <div className="flex flex-row justify-between mx-10 pt-6">
            <a href="https://transfigurism.org">
              <img
                className="h-28 w-auto"
                src="/img/mta-logo.svg"
                alt="Mormon Transhumanist Association"
              />
            </a>
            <div
              className="max-w-md">
              <div className="py-6 px-6 backdrop-blur-sm bg-gray-900/60">
                <div className="container flex-col">
                  <div className="">
                    <h1
                      className="text-xl tracking-tight">
                      <span className="block font-extrabold text-amber-600">Announcing MTAConf 2024</span>
                      <span
                        className="py-4 text-4xl font-serif italic block bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-500 sm:pb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      The Glory of God Is Intelligence
                    </span>
                    </h1>
                    <p
                      className="py-3 text-base text-amber-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-md">
                      AI and machine learning are transforming our world. Will
                      humanity
                      rise to the challenge of this apocalyptic moment?
                    </p>
                    <div
                      className="mt-3 text-xl tracking-tight font-extrabold text-amber-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      March 16, 2024
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <a
                            href="#">
                            <button
                              type="submit"
                              className="py-3 px-20 lg:px-28 rounded-md shadow bg-gradient-to-r from-amber-500 to-amber-700 text-black font-medium hover:from-amber-400 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            >
                              Register now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
