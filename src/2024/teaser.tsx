export function Teaser() {
  return (
    <div className="py-8 xl:py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="max-w-max lg:max-w-8xl mx-auto text-white">
        <div className="relative z-10 mb-4 md:mb-2 md:px-6 pt-8">
          <div className="flex flex-row flex-wrap gap-6">
            <div className="flex flex-col gap-4">
              <img src="/img/2024/ben-peters.jpg" className="w-48 h-48" />
              <div className="flex flex-col">
                <div className="text-white self-center text-xl font-bold">
                  Ben Peters
                </div>
                <div className="text-white self-center">
                  Author & Media Scholar
                </div>
                <div className="text-white self-center">
                  Mormon Keynote Speaker
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src="/img/2024/venkatesh-rao.jpg" className="w-48 h-48" />
              <div className="flex flex-col">
                <div className="text-white self-center text-xl font-bold">
                  Venkatesh Rao
                </div>
                <div className="text-white self-center">
                  Writer & Tech Consultant
                </div>
                <div className="text-white self-center">
                  Tech Keynote Speaker
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src="/img/2024/sarah-constantin.jpg" className="w-48 h-48" />
              <div className="flex flex-col">
                <div className="text-white self-center text-xl font-bold">
                  Sarah Constantin
                </div>
                <div className="text-white self-center w-40 text-center">
                  Rationalist & AI Alignment Expert
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src="/img/2024/conor-sullivan.jpg" className="w-48 h-48" />
              <div className="flex flex-col">
                <div className="text-white self-center text-xl font-bold">
                  Conor Sullivan
                </div>
                <div className="text-white self-center w-40 text-center">
                  Founder, Roam Research
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src="/img/2024/lincoln-cannon.jpg" className="w-48 h-48" />
              <div className="flex flex-col">
                <div className="text-white self-center text-xl font-bold">
                  Lincoln Cannon
                </div>
                <div className="text-white self-center w-40 text-center">
                  CEO, Thrivous
                  <br />
                  Co-Founder, MTA
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src="/img/2024/carl-youngblood.jpg" className="w-48 h-48" />
              <div className="flex flex-col">
                <div className="text-white self-center text-xl font-bold">
                  Carl Youngblood
                </div>
                <div className="text-white self-center w-40 text-center">
                  CTO, Crescendo
                  <br />
                  President, MTA
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="h-48 flex">
                  <div className="m-auto text-white self-center text-xl font-bold">
                    ...and more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
