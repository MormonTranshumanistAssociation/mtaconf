import React from "react";

interface SpeakerProps {
  name: string;
  portrait: string;
  content: React.ReactNode;
}
export function KeynoteSpeaker(props: SpeakerProps) {
  const { name, portrait, content } = props;
  return (
    <div className="pt-6">
      <div className="flow-root bg-stone-800 rounded-lg px-6 pb-8">
        <div className="mt-6">
          <div className="flex flex-row justify-center items-center">
            <img
              className="rounded-lg w-full lg:w-2/3 h-auto shadow-lg"
              src={portrait}
              alt={name}
            />
          </div>
          <h3 className="mt-8 text-2xl font-medium font-bold text-stone-300 tracking-tight">
            {name}
          </h3>
          <div className="mt-5 text-base text-stone-300 text-left text-base max-w-prose prose prose-indigo">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OtherSpeaker(props: SpeakerProps) {
  const { name, portrait, content } = props;
  return (
    <div className="pt-6">
      <div className="flow-root bg-stone-800 rounded-lg px-6 pb-8">
        <div className="mt-6">
          <div className="p-1">
            <img
              className="rounded-lg w-full h-auto shadow-lg"
              src={portrait}
              alt={name}
            />
          </div>
          <h3 className="mt-8 text-2xl font-medium font-bold text-stone-300 tracking-tight">
            {name}
          </h3>
          <div className="mt-5 text-base text-stone-300 text-left text-base max-w-prose prose prose-indigo">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Speakers() {
  return (
    <div className="relative bg-black pb-8 sm:pb-24 md:pb-6 lg:pb-12">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-20 text-3xl font-extrabold text-yellow-100 tracking-tight sm:text-4xl">
          Keynote speakers
        </p>

        <div className="mt-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 text-center">
            <KeynoteSpeaker
              name="Benjamin Peters"
              portrait="/img/2024/ben-peters.jpg"
              content={
                <p>
                  Benjamin Peters is a media scholar. The author and editor of
                  three books and as many major prizes, he is the{" "}
                  <a href="https://utulsa.edu/departments/media-studies/ben-peters/">
                    Hazel Rogers Associate Professor and Chair of Media Studies
                  </a>{" "}
                  at the <a href="https://utulsa.edu/">University of Tulsa</a>,
                  affiliated fellow at the{" "}
                  <a href="https://law.yale.edu/isp">
                    Information Society Project
                  </a>{" "}
                  at <a href="https://law.yale.edu/">Yale Law School</a>, and
                  holds a PhD from{" "}
                  <a href="https://www.columbia.edu/">Columbia University</a>.
                  The President of the{" "}
                  <a href="https://www.mormonscholars.net/">
                    Mormon Scholars in the Humanities
                  </a>
                  , he is the author of several books, including{" "}
                  <em>
                    How Not to Network a Nation: The Uneasy History of the
                    Soviet Internet
                  </em>
                  , and <em>Your Computer Is on Fire</em>, from MIT Press. Dr.
                  Peters is currently writing a book on the Soviet prehistory to
                  artificial intelligence, from which his talk will draw. More
                  at{" "}
                  <a href="https://benjaminpeters.org/">benjaminpeters.org</a>.
                </p>
              }
            />

            <KeynoteSpeaker
              name="Irina Rish"
              portrait="/img/2024/irina-rish.jpg"
              content={
                <>
                  <p>
                    Irina Rish is a full professor in the{" "}
                    <a href="https://diro.umontreal.ca/english/home/">
                      Computer Science department
                    </a>{" "}
                    at the{" "}
                    <a href="https://www.umontreal.ca/en/">
                      University de Montreal
                    </a>{" "}
                    and a core member of the{" "}
                    <a href="https://mila.quebec/en/">
                      Mila-Quebec AI Institute
                    </a>
                    . She holds the{" "}
                    <a href="https://mila.quebec/en/canada-cifar-ai-chairs/">
                      Canada CIFAR AI Chair
                    </a>{" "}
                    and the{" "}
                    <a href="https://www.cerc.gc.ca/chairholders-titulaires/index-eng.aspx">
                      Canadian Excellence Research Chair
                    </a>{" "}
                    in Autonomous AI. Her background includes an MSc and PhD in
                    AI from the{" "}
                    <a href="https://uci.edu/">
                      University of California, Irvine
                    </a>
                    , and an MSc in Applied Mathematics from the{" "}
                    <a href="https://en.gubkin.ru/">Moscow Gubkin Institute</a>.
                    Dr. Rish’s current research interests include continual
                    lifelong learning, optimization algorithms for deep neural
                    networks, sparse modelling, dialog generation, biologically
                    plausible reinforcement learning, and dynamic systems
                    approaches to brain imaging analysis. She holds{" "}
                    <a href="https://patents.google.com/?inventor=Irina+Rish">
                      64 patents
                    </a>{" "}
                    and has published over{" "}
                    <a href="https://scholar.google.com/citations?user=Avse5gIAAAAJ">
                      80 research papers
                    </a>
                    , several book chapters, three books as editor, and a
                    monograph on Sparse Modelling.
                  </p>
                </>
              }
            />
          </div>
        </div>

        <p className="mt-12 text-3xl font-extrabold text-yellow-100 tracking-tight sm:text-4xl">
          Other speakers
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <OtherSpeaker
              name="Brent Allsop"
              portrait="/img/2024/brent-allsop.jpg"
              content={
                <p>
                  Brent Allsop has a BS in Computer Science from the{" "}
                  <a href="https://www.utah.edu/">University of Utah</a> and is
                  working to bring the world back together with the consensus
                  building and tracking system at{" "}
                  <a href="https://canonizer.com/">Canonizer.com</a>. Brent is
                  interested in theories of consciousness and is{" "}
                  <a href="https://canonizer.com/topic/81-Mind-Experts/3-Brent-Allsop">
                    peer ranked
                  </a>{" "}
                  as a “mind expert.” Brent has been building and tracking
                  expert consensus around the best theories of consciousness
                  with the{" "}
                  <a href="https://canonizer.com/topic/105">
                    Consciousness Consensus Project
                  </a>{" "}
                  since 2010. He was sealed to Malia Allsop in the Jordan River
                  Temple and has three adult children.
                </p>
              }
            />

            <OtherSpeaker
              name="Bryce Haymond"
              portrait="/img/2024/bryce-haymond.jpg"
              content={
                <p>
                  Bryce Haymond is an artist, designer, philosopher, writer, and
                  a mystic. He received his BFA in Industrial Design from{" "}
                  <a href="https://www.byu.edu">Brigham Young University</a>,
                  and has worked in product design, marketing, IT, and as an
                  entrepreneur. He currently enjoys being a stay-at-home dad,
                  writing about contemplative life, and making art, including
                  commissions. He shares his work at{" "}
                  <a href="https://www.thymindoman.com/">ThyMindOMan.com</a>,
                  and lives with his wife and four children in Lehi, Utah.
                </p>
              }
            />

            <OtherSpeaker
              name="Caleb Jones"
              portrait="/img/2024/caleb-jones.jpg"
              content={
                <p>
                  Caleb Jones lives in the Pacific Northwest is a husband,
                  father, engineer, and a practicing member of the LDS Church.
                  He has a Computer Science degree from BYU and works as a
                  Systems Architect at{" "}
                  <a href="https://www.disney.com/">Disney</a> focusing on
                  large-scale data. He is passionate about science and religion
                  particularly in areas such as astronomy, network science,
                  emergentism, religious cosmology, and transhumanism. His
                  introduction to transhumanism came from the writings of
                  Freeman Dyson and have developed through associations with the{" "}
                  <a href="https://transfigurism.org/">MTA</a>. In addition to
                  blogging on the{" "}
                  <a href="https://blog.transfigurism.org">MTA blog</a>, Caleb
                  also blogs about network science analysis and visualization on{" "}
                  <a href="https://allthingsgraphed.com/">
                    allthingsgraphed.com
                  </a>{" "}
                  and co-authors the blog{" "}
                  <a href="https://navigatingdiscipleship.com/">
                    navigatingdiscipleship.com
                  </a>{" "}
                  with his wife.
                </p>
              }
            />
            <OtherSpeaker
              name="Carl Youngblood"
              portrait="/img/2022/carl.jpg"
              content={
                <p>
                  Carl Youngblood is President and co-founder of the{" "}
                  <a href="https://transfigurism.org/">
                    Mormon Transhumanist Association
                  </a>
                  . He regularly engages in thoughtwork surrounding future
                  technological advances, and recently published{" "}
                  <a href="https://www.wayfaremagazine.org/p/algorithmic-advent">
                    an essay on artificial intelligence
                  </a>{" "}
                  for Wayfare Magazine. Carl has made a career in software
                  engineering, and currently works as co-founder and CTO of{" "}
                  <a href="">Crescendo</a>, which is building a talent search
                  and payroll platform that will be used by{" "}
                  <a href="https://www.byupathway.edu/">BYU Pathway</a>{" "}
                  graduates. Carl received a BA in Portuguese from{" "}
                  <a href="https://www.byu.edu">Brigham Young University</a> and
                  an MS in Computer Science from the{" "}
                  <a href="https://www.washington.edu">
                    University of Washington
                  </a>
                  .
                </p>
              }
            />
            <OtherSpeaker
              name="Connie Packer"
              portrait="/img/2024/connie-packer-square.jpg"
              content={
                <p>
                  Connie Packer is a Registered Dietitian in Salt Lake City. She
                  has a Master’s degree in Nutritional Science from{" "}
                  <a href="https://www.byu.edu">Brigham Young University</a>.
                  Connie has worked as a dietitian in long term care, clinical
                  nutrition, and most recently with patients with spinal cord
                  injuries. She enjoys personalizing nutrition information for
                  her patients and looks forward to the advancement of the field
                  of nutrigenomics. Connie serves as the Vice President of the{" "}
                  <a href="https://transfigurism.org/">
                    Mormon Transhumanist Association
                  </a>
                  . Connie Packer is a Registered Dietitian who has worked in
                </p>
              }
            />
            <OtherSpeaker
              name="Conor White-Sullivan"
              portrait="/img/2024/conor-sullivan.jpg"
              content={
                <p>
                  Conor White-Sullivan is the founder of{" "}
                  <a href="https://roamresearch.com/">Roam Research</a>, a
                  note-taking application that utilizes an outlining approach
                  and linked references to facilitate knowledge management.
                  White-Sullivan‘s work on Roam Research reflects his commitment
                  to developing tools that augment human intelligence and
                  cognition, enabling more efficient research, writing, and
                  knowledge curation processes. First introduced to details of
                  Mormon theology by{" "}
                  <a href="https://transfigurism.org/">MTA</a> co-founder Carl
                  Youngblood, Conor recently converted to the LDS Church and was
                  later elected to the leadership of the Association as a
                  Director.
                </p>
              }
            />
            <OtherSpeaker
              name="Dallin Bradford"
              portrait="/img/2024/dallin-bradford-square.jpg"
              content={
                <p>
                  Dallin Bradford is an accomplished voice actor whose passion
                  for storytelling was kindled by his parents‘ love of reading.
                  With a background in theater and narration training,
                  Bradford‘s foray into audiobook narration began humbly,
                  recording projects during family holidays. His talent soon
                  propelled him into professional work with local publishers,
                  earning recognition within the audiobook community. Bradford‘s
                  narration career has provided him and his wife, Kennedy, with
                  a flexible lifestyle to pursue artistic endeavors, travel, and
                  give back to their community. Dallin serves as a director in
                  the Association.
                </p>
              }
            />
            <OtherSpeaker
              name="Evan Hadfield"
              portrait="/img/2024/evan-hadfield.jpg"
              content={
                <p>
                  Evan leads operations at{" "}
                  <a href="https://cip.org/">
                    The Collective Intelligence Project
                  </a>
                  , incubating new governance models for generative AI. A
                  seasoned activist, he‘s championed direct action, mutual aid,
                  and collective organizing. At{" "}
                  <a href="https://twitter.com/">Twitter</a>, he organized a
                  walkout for the 2019 Climate Strikes, pressured execs to make
                  environmental commitments, and played an instrumental role
                  resisting detrimental changes during Elon‘s takeover. Evan has
                  even helped physically block old-growth logging in British
                  Columbia. He currently enjoys long walks with his wife and
                  13-year-old golden retriever in beautiful Mount Shasta,
                  California.
                </p>
              }
            />
            <OtherSpeaker
              name="Jon Ogden"
              portrait="/img/2024/jon-ogden.jpg"
              content={
                <p>
                  Jon is a co-founder at{" "}
                  <a href="https://upliftkids.org/">UpliftKids</a>, a lesson
                  library and curriculum that helps families nurture spiritual
                  health. He is also the author of the book{" "}
                  <a href="https://www.goodreads.com/book/show/31206987-when-mormons-doubt">
                    <em>
                      When Mormons Doubt: A Way to Strengthen Relationships and
                      Live a Quality Life
                    </em>
                  </a>{" "}
                  and has a bachelor‘s degree in English literature and a
                  master‘s in Writing and Rhetoric from{" "}
                  <a href="https://www.byu.edu">Brigham Young University</a>. He
                  lives with his spouse and two kids in Provo, Utah
                </p>
              }
            />
            <OtherSpeaker
              name="Joseph West"
              portrait="/img/2022/joseph.jpg"
              content={
                <p>
                  Joseph West lives in Tucson, Arizona with his three children
                  and his partner{" "}
                  <a href="https://katekincaid.com/">Katherine Kincaid</a>.
                  Together, they own and operate private group psychotherapy
                  practices in both{" "}
                  <a href="https://www.tucsoncounselingassociates.com/">
                    Tucson
                  </a>{" "}
                  and{" "}
                  <a href="https://somapsychotherapyslc.com/">Salt Lake City</a>
                  . The practice specializes in psychedelic integration, and
                  psychedelic assisted therapies. Joseph is passionate about
                  creating safe contexts for the use and exploration of sacred
                  medicines and technologies, both natural and synthetic. In
                  past years, Joseph spent time working as a real estate
                  professional, an accountant, a stay-at-home parent, and a
                  sociologist. His social-scientific research on early Mormon
                  history was published in the{" "}
                  <a href="https://onlinelibrary.wiley.com/journal/14685906">
                    Journal for the Scientific Study of Religion
                  </a>
                  . Joseph is a co-founding member of the{" "}
                  <a href="https://transfigurism.org/">MTA</a> and currently
                  serves in the Association as Treasurer.
                </p>
              }
            />

            <OtherSpeaker
              name="Lincoln Cannon"
              portrait="/img/2024/lincoln-cannon.jpg"
              content={
                <p>
                  Lincoln Cannon writes and presents about technological
                  evolution and postsecular religion. He esteems religion as a
                  powerful social technology that, like all technology, presents
                  both risks and opportunities. And he envisions the ethical use
                  of technology empowering humanity to attain unprecedented
                  magnitudes of intelligence, vitality, and compassion. He is a
                  co-founder of the{" "}
                  <a href="https://transfigurism.org">
                    Mormon Transhumanist Association
                  </a>{" "}
                  and the{" "}
                  <a href="https://www.christiantranshumanism.org/">
                    Christian Transhumanist Association
                  </a>
                  . He also formulated the{" "}
                  <a href="https://new-god-argument.com/">New God Argument</a>,
                  a logical argument for faith in God that is popular among
                  religious Transhumanists. Lincoln is founder and CEO of{" "}
                  <a href="https://thrivous.com/">Thrivous</a>, the human
                  enhancement company. He received an MBA from the{" "}
                  <a href="https://marriott.byu.edu/">
                    Marriott School of Business
                  </a>{" "}
                  and a bachelors degree in philosophy from{" "}
                  <a href="https://www.byu.edu/">Brigham Young University</a>.
                </p>
              }
            />

            <OtherSpeaker
              name="Luke Hutchison"
              portrait="/img/2024/luke-hutchison.jpg"
              content={
                <p>
                  Luke Hutchison is a computer scientist from New Zealand with
                  an interest in deep computer science theory and the nature of
                  intelligence. Luke completed his PhD in computer science and
                  computational biology at the{" "}
                  <a href="https://mit.edu">
                    Massechusetts Institute of Technology
                  </a>
                  , and later co-founded an AI research team at{" "}
                  <a href="https://research.google/research-areas/machine-intelligence/">
                    Google Machine Intelligence
                  </a>{" "}
                  with Ray Kurzweil. Luke is an amateur bobsledder and a
                  language enthusiast.
                </p>
              }
            />

            <OtherSpeaker
              name="Matt Gardner"
              portrait="/img/2024/matt-gardner.jpg"
              content={
                <p>
                  Matt Gardner is from Colorado Springs, Colorado, and currently
                  lives in Provo, Utah with his wife and three kids. Matt is a
                  Latter-day Saint Seminary teacher at Lehi, Utah, and holds a
                  Master’s degree in Biblical Studies from{" "}
                  <a href="https://www.regent.edu/">Regent University</a>.
                  Currently, Matt is enrolled in a PhD program for Biblical
                  Studies at{" "}
                  <a href="https://www.amridgeuniversity.edu/">
                    Amridge University
                  </a>{" "}
                  with plans to complete his degree in 2026. He is a huge{" "}
                  <a href="https://www.byu.edu">BYU</a> football and basketball
                  fan, but also enjoys studying, writing, and teaching on LDS
                  Transhumanism topics. When he’s not teaching, reading,
                  writing, or watching sports, Matt is usually found playing and
                  wrestling with his kids.
                </p>
              }
            />

            <OtherSpeaker
              name="McKay Moore"
              portrait="/img/2024/mckay-moore.jpg"
              content={
                <p>
                  McKay Moore is a passionate learner with interests in the
                  psychology of learning, epistemology, and the philosophy of
                  science and technology. After completing a B.Sc. in
                  psychology, he entered software development and currently
                  works as a full-stack software engineer. McKay loves to rock
                  climb, lift weights, and play tabletop role-playing games.
                </p>
              }
            />

            <OtherSpeaker
              name="Micah Redding"
              portrait="/img/2024/micah-redding.jpg"
              content={
                <p>
                  Micah Redding is the founder of the{" "}
                  <a href="https://www.christiantranshumanism.org/">
                    Christian Transhumanist Association
                  </a>
                  , and an international speaker on artificial intelligence,
                  transhumanism, and the future of humanity. He has contributed
                  to several books on technological futurism, and his work has
                  been covered in places like BBC World Radio, Channel News
                  Asia, The Verge, Vice Motherboard, and Christianity Today.
                  Micah Redding holds a Masters in Philosophy, Science and
                  Religion from the{" "}
                  <a href="https://www.ed.ac.uk/">University of Edinburgh</a>.
                </p>
              }
            />

            <OtherSpeaker
              name="Nancy Fulda"
              portrait="/img/2024/nancy-fulda.jpg"
              content={
                <p>
                  Nancy Fulda is a computer scientist, mother, and science
                  fiction writer living in Orem, Utah. She earned her PhD from{" "}
                  <a href="https://www.byu.edu">Brigham Young University</a> in
                  2019 and is currently the director of BYU's{" "}
                  <a href="https://dragn.ai/">DRAGN Lab</a>, a research group
                  that studies machine learning, knowledge representation, and
                  societal impacts of generative AI. Dr. Fulda is a Phobos Award
                  winner, an{" "}
                  <a href="https://www.associationmormonletters.org/">AML</a>{" "}
                  Award winner, and a{" "}
                  <a href="https://www.baen.com/contest-jbmssa">
                    Jim Baen Memorial Award
                  </a>{" "}
                  recipient. In 2024 she was named one of{" "}
                  <a href="https://www.aiutah.org/nancy-fulda-2/">
                    Utah's top 100 AI professionals
                  </a>
                  .
                </p>
              }
            />

            <OtherSpeaker
              name="Randall Paul"
              portrait="/img/2024/randall-paul.jpg"
              content={
                <p>
                  Charles Randall Paul, Ph.D. is the president of the Foundation
                  for Religious Diplomacy (USA) that works to build trust
                  between religious and ideological rivals. He authored{" "}
                  <a href="https://www.amazon.com/Converting-Saints-Religious-Rivalry-America/dp/1589587561">
                    <em>
                      Converting the Saints: A Study of Religious Rivalry in
                      America
                    </em>
                  </a>{" "}
                  and numerous articles on methods for collaborative social
                  contestation. He has produced documentary films including{" "}
                  <em>Us and Them: Religious Rivalry in America</em>. He has
                  lectured and organized dialogues in Asia, Europe, and the
                  Middle East. He received a BS from{" "}
                  <a href="https://www.byu.edu">Brigham Young University</a>
                  in social psychology, an MBA from{" "}
                  <a href="https://www.harvard.edu">Harvard University</a>, and
                  after a career in commercial real estate, a PhD at the{" "}
                  <a href="https://www.uchicago.edu">University of Chicago</a>,
                  Committee on Social Thought. He has served as a bishop in the
                  Church of Jesus Christ of Latter-day Saints. He is a director
                  on several business and philanthropic boards, including Luke
                  10. He has five children and sixteen grandchildren.
                </p>
              }
            />

            <OtherSpeaker
              name="Rachael Johnson"
              portrait="/img/2024/rachael-johnson.jpg"
              content={
                <p>
                  Rachael Johnson received her PhD in history at the{" "}
                  <a href="https://www.virginia.edu/">University of Virginia</a>{" "}
                  and is currently a postdoctoral fellow at the{" "}
                  <a href="https://mi.byu.edu/">Maxwell Institute</a> (
                  <a href="https://www.byu.edu">BYU</a>) working on projects
                  related to embodiment and materiality in the early modern
                  Catholic tradition and in late-19th century Latter-day Saint
                  reception history. She is the mother of three and currently
                  resides in Provo, UT.
                </p>
              }
            />

            <OtherSpeaker
              name="Spencer Cannon"
              portrait="/img/2024/spencer-cannon-square.jpg"
              content={
                <p>
                  Spencer Cannon is a second-generation Mormon Transhumanist who
                  has grown up with the values of the Association as a way of
                  life. He works at Qualtrics and serves as a Director in the{" "}
                  <a href="https://www.transfigurism.org">
                    Mormon Transhumanist Association
                  </a>
                  .
                </p>
              }
            />

            <OtherSpeaker
              name="Tamara Kneese"
              portrait="/img/2024/tamara-kneese.jpg"
              content={
                <p>
                  Tamara Kneese is Project Director of{" "}
                  <a href="https://datasociety.net/">Data & Society</a>’s{" "}
                  <a href="https://datasociety.net/algorithmic-impact-methods-lab/">
                    Algorithmic Impact Methods Lab
                  </a>
                  , where she is also a Senior Researcher. Before joining D&S,
                  she was Lead Researcher at{" "}
                  <a href="https://greensoftware.foundation/">
                    Green Software Foundation
                  </a>
                  , Director of Developer Engagement on the Green Software team
                  at{" "}
                  <a href="https://www.intel.com/content/www/us/en/homepage.html">
                    Intel
                  </a>
                  , and Assistant Professor of Media Studies and Director of
                  Gender and Sexualities Studies at the{" "}
                  <a href="https://www.usfca.edu/">
                    University of San Francisco
                  </a>
                  . Tamara holds a PhD in Media, Culture and Communication from{" "}
                  <a href="https://www.nyu.edu/">New York University</a> and is
                  the author of{" "}
                  <a href="https://yalebooks.yale.edu/book/9780300248272/death-glitch/">
                    <em>
                      Death Glitch: How Techno-Solutionism Fails Us in This Life
                      and Beyond
                    </em>
                  </a>{" "}
                  (Yale University Press, 2023).
                </p>
              }
            />

            <OtherSpeaker
              name="Teresa Pratt"
              portrait="/img/2024/teresa-pratt.jpg"
              content={
                <p>
                  Teresa Pratt is semi-retired from her legal practice and is a
                  part-time municipal judge in Eufaula, Oklahoma, where she
                  resides with her husband. She grew up on an Oklahoma cattle
                  ranch, which she still operates with her husband and their
                  three adult children. She holds a Bachelor’s degree in
                  business administration from the{" "}
                  <a href="https://www.ou.edu/">University of Oklahoma</a> and a
                  Juris Doctor degree from the{" "}
                  <a href="https://utulsa.edu/academics/law/">
                    University of Tulsa College of Law
                  </a>
                  . Upon the advent of the Information Age, Teresa became more
                  aware of and interested in life extension and age reversal
                  research and development. She holds a positive view of
                  emerging technologies in human enhancement and space
                  exploration and takes every opportunity to share her
                  enthusiasm with others. Teresa serves as a Director of the{" "}
                  <a href="https://www.transfigurism.org">
                    Mormon Transhumanist Association
                  </a>
                  .
                </p>
              }
            />

            <OtherSpeaker
              name="Wolf Tivy"
              portrait="/img/2024/wolf-tivy.jpg"
              content={
                <p>
                  Wolf was trained as a mechanical engineer, but quit his job to
                  pursue more open-ended philosophical projects. He is the
                  founder and former Editor in Chief of{" "}
                  <a href="https://www.palladiummag.com/">Palladium Magazine</a>
                  , and writes about how not to be enslaved by the modern
                  ideological superstructure. He is currently working on his
                  next project, building software infrastructure for philosophy
                  as a way of life.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
