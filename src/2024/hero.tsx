import { Link } from "react-router-dom";

const pastConferences = [
  { year: 2022, link: "/2022" },
  {
    year: 2020,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYBrHWT9Pp63g9-9kl39MDT3",
  },
  {
    year: 2019,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYCeq7gmtAZ8Onwjo7mc_jwC",
  },
  {
    year: 2018,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYD5yZT_2EhDQqs8RFzfrTej",
  },
  {
    year: 2017,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYD5yZT_2EhDQqs8RFzfrTej",
  },
  {
    year: 2016,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYAENAKyBT9lTZAvs_04IUpB",
  },
  {
    year: 2015,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYCcswn8mi_UwgrGYOncImI0",
  },
  {
    year: 2014,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYA8NwJNOxOs7eRKNmoyadP0",
  },
  {
    year: 2013,
    link: "https://www.youtube.com/playlist?list=PLbIPMPVrfXYDQjYsw9w2nl6gSdphMROV5",
  },
  {
    year: 2012,
    link: "https://www.youtube.com/playlist?list=PL3893B119820E9DC1",
  },
];

export function Hero() {
  return (
    <section>
      <div className="m-4 h-20 grid grid-cols-8 items-center justify-center bg-black text-amber-600 text-xs gap-2 sm:h-0 sm:flex sm:flex-row">
        <div className="col-span-8">Previous years:</div>
        {pastConferences.map((conf) =>
          conf.link.match(/^http/) ? (
            <Link
              key={conf.year}
              className="underline hover:no-underline text-amber-500"
              to={conf.link}
            >
              {conf.year}
            </Link>
          ) : (
            <a
              key={conf.year}
              href={conf.link}
              className="underline hover:no-underline text-amber-500"
            >
              {conf.year}
            </a>
          ),
        )}
      </div>
      <header className="">
        <div className="w-full bg-[url('/img/2024/mtaconf-2024-hero-01-regular.jpg')] bg-cover bg-top bg-no-repeat">
          <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center sm:items-start sm:justify-between mx-10 pt-20 sm:pt-6 min-h-[500px]">
            <a href="https://transfigurism.org">
              <img
                className="h-28 w-auto"
                src="/img/mta-logo.svg"
                alt="Mormon Transhumanist Association"
              />
            </a>
            <div className="max-w-sm">
              <div className="py-6 px-6 backdrop-blur-sm bg-gray-900/60">
                <div className="container flex-col">
                  <div className="">
                    <h1 className="text-md sm:text-xl tracking-tight">
                      <span className="block font-extrabold text-gray-300">
                        Announcing MTAConf 2024
                      </span>
                      <span className="py-4 text-2xl sm:text-4xl font-serif italic block bg-clip-text text-transparent bg-gradient-to-t sm:bg-gradient-to-r from-white to-amber-500 sm:pb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        The Glory of God Is Intelligence
                      </span>
                    </h1>
                    <p className="py-3 text-sm text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-md">
                      AI and machine learning are transforming our world. Will
                      humanity rise to the challenge of this apocalyptic moment?
                    </p>
                    <div className="mt-3 text-md sm:text-xl tracking-tight font-extrabold text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      March 16, 2024
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <a href="https://donations.transfigurism.org/b/fZeaFRgpj4p07PGfZ3">
                            <button
                              type="submit"
                              className="py-3 w-full lg:px-28 rounded-md shadow bg-gradient-to-r from-amber-700 to-amber-900 text-gray-300 font-medium hover:from-amber-600 hover:to-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 hover:text-white focus:ring-offset-amber-900"
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
