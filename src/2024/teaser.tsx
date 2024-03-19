interface PortraitProps {
  image: string;
  name: string;
  title1: string;
  title2?: string;
}
function Portrait(props: PortraitProps) {
  return (
    <div className="flex flex-col gap-4">
      <img src={props.image} className="w-48 h-48 rounded-lg" />
      <div className="flex flex-col">
        <div className="text-white self-center text-xl font-bold">
          {props.name}
        </div>
        {props.title1 && props.title1.length > 20 ? (
          <div className="text-white self-center text-xs">{props.title1}</div>
        ) : (
          <div className="text-white self-center">{props.title1}</div>
        )}
        {props.title2 && props.title2.length > 20 ? (
          <div className="text-white self-center text-xs">{props.title2}</div>
        ) : (
          <div className="text-white self-center">{props.title2}</div>
        )}
      </div>
    </div>
  );
}
export function Teaser() {
  return (
    <div className="py-8 xl:py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="mb-4 md:mb-2 md:px-6">
        <div className="text-base max-w-prose lg:max-w-none">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-100 bg-black sm:text-4xl">
            Speakers
          </p>
        </div>
      </div>

      <div className="flex justify-center max-w-max lg:max-w-8xl text-white">
        <div className="mb-4 md:mb-2 md:px-6 pt-8">
          <div className="flex flex-row flex-wrap gap-6">
            <Portrait
              image="/img/2024/ben-peters.jpg"
              name="Benjamin Peters"
              title1="Author & Media Scholar"
              title2="Mormon Keynote Speaker"
            />

            <Portrait
              image="/img/2024/brent-allsop.jpg"
              name="Brent Allsop"
              title1="Founder"
              title2="Canonizer"
            />

            <Portrait
              image="/img/2024/caleb-jones.jpg"
              name="Caleb Jones"
              title1="Software Architect"
              title2="Disney"
            />

            <Portrait
              image="/img/2024/carl-youngblood.jpg"
              name="Carl Youngblood"
              title1="President"
              title2="MTA"
            />

            <Portrait
              image="/img/2024/connie-packer-square.jpg"
              name="Connie Packer"
              title1="Vice President"
              title2="MTA"
            />

            <Portrait
              image="/img/2024/conor-sullivan.jpg"
              name="Conor Sullivan"
              title1="Founder"
              title2="Roam Research"
            />

            <Portrait
              image="/img/2024/dallin-bradford-square.jpg"
              name="Dallin Bradford"
              title1="Director"
              title2="MTA"
            />

            <Portrait
              image="/img/2024/dan-moore.jpg"
              name="Dan Moore"
              title1="Geoscientist"
            />

            <Portrait
              image="/img/2024/evan-hadfield.jpg"
              name="Evan Hadfield"
              title1="Head of Operations"
              title2="Collective Intelligence Project"
            />

            <Portrait
              image="/img/2024/irina-rish.jpg"
              name="Irina Rish"
              title1="Canada CIFAR AI Chair"
              title2="Transhumanist Keynote Speaker"
            />

            <Portrait
              image="/img/2022/jon.jpg"
              name="Jon Ogden"
              title1="Founder"
              title2="Uplift Kids"
            />

            <Portrait
              image="/img/2022/joseph.jpg"
              name="Joseph West"
              title1="Co-Founder"
              title2="MTA"
            />

            <Portrait
              image="/img/2024/lincoln-cannon.jpg"
              name="Lincoln Cannon"
              title1="Co-Founder"
              title2="MTA"
            />

            <Portrait
              image="/img/2024/luke-hutchison.jpg"
              name="Luke Hutchison"
              title1="Computer Scientist"
            />

            <Portrait
              image="/img/2024/matt-gardner.jpg"
              name="Matt Gardner"
              title1="CES Educator"
            />

            <Portrait
              image="/img/2024/mckay-moore.jpg"
              name="McKay Moore"
              title1="Software Engineer"
            />

            <Portrait
              image="/img/2024/micah-redding.jpg"
              name="Micah Redding"
              title1="Executive Director, Christian"
              title2="Transhumanist Association"
            />

            <Portrait
              image="/img/2024/nancy-fulda.jpg"
              name="Nancy Fulda"
              title1="AI Researcher"
            />

            <Portrait
              image="/img/2024/randall-paul.jpg"
              name="Randall Paul"
              title1="Foundation for"
              title2="Religious Diplomacy"
            />

            <Portrait
              image="/img/2024/rachael-johnson.jpg"
              name="Rachael Johnson"
              title1="Postdoctoral Fellow"
              title2="Maxwell Institute"
            />

            <Portrait
              image="/img/2024/spencer-cannon-square.jpg"
              name="Spencer Cannon"
              title1="Director"
              title2="MTA"
            />

            <Portrait
              image="/img/2024/tamara-kneese.jpg"
              name="Tamara Kneese"
              title1="Project Director"
              title2="AIMLab"
            />

            <Portrait
              image="/img/2024/teresa-pratt.jpg"
              name="Teresa Pratt"
              title1="Director"
              title2="MTA"
            />

            <Portrait
              image="/img/2024/wolf-tivy.jpg"
              name="Wolf Tivy"
              title1="Founding Editor"
              title2="Palladium Magazine"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
