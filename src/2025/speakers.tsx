import type React from "react";

interface SpeakerProps {
	name: string;
	portrait: string;
	content: React.ReactNode;
}
export function KeynoteSpeaker(props: SpeakerProps) {
	const { name, portrait, content } = props;
	return (
		<div className="pt-6">
			<div className="flow-root bg-yellow-100 rounded-lg px-6 pb-8">
				<div className="mt-6">
					<div className="flex flex-row justify-center items-center">
						<img
							className="rounded-lg w-full lg:w-1/2 h-auto shadow-lg"
							src={portrait}
							alt={name}
						/>
					</div>
					<h3 className="mt-8 text-2xl font-medium font-bold text-green-600 tracking-tight">
						{name}
					</h3>
					<div className="mt-5 text-base text-green-600 text-left text-base max-w-prose prose prose-indigo">
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
		<div className="relative bg-gradient-to-r from-emerald-700 to-orange-400 pb-24 pt-1">
			<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<p className="mt-20 text-3xl font-extrabold text-yellow-100 tracking-tight sm:text-4xl">
					Keynote speakers
				</p>

				<div className="mt-4">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
						<KeynoteSpeaker
							name="Thomas McConkie"
							portrait="/img/2025/thomas-mcconkie.jpg"
							content={
								<p>
									Thomas McConkie is a meditation teacher, philosopher, and
									author bridging contemplative traditions with modern spiritual
									practice. The founder of{" "}
									<a href="https://lowerlightswisdom.org/">
										Lower Lights School of Wisdom
									</a>{" "}
									and author of{" "}
									<em>
										Navigating Mormon Faith Crisis: A Simple Developmental Map
									</em>
									, Thomas brings twenty years of Buddhist meditation practice
									together with expertise in adult developmental psychology. His
									work explores the cross-pollination between Buddhism and
									Mormonism, offering insights on spiritual development through
									mindfulness practices. Thomas has developed frameworks for
									understanding faith transitions and spiritual growth,
									including his recent work on "At-One-Ment" and the integration
									of contemplative practices within religious communities.
								</p>
							}
						/>

						<KeynoteSpeaker
							name="Randal Koene"
							portrait="/img/2025/randal-koene.jpg"
							content={
								<p>
									Randal Koene is a neuroscientist and pioneering researcher in
									whole brain emulation and substrate-independent minds. He
									holds a Ph.D. in Computational Neuroscience from{" "}
									<a href="https://www.mcgill.ca/">McGill University</a> and an
									M.Sc. in Electrical Engineering from{" "}
									<a href="https://www.tudelft.nl/">Delft University</a>. As
									founder and chairman of the{" "}
									<a href="https://carboncopies.org/">
										Carboncopies Foundation for Substrate-Independent Minds
									</a>
									, Randal leads research efforts to advance brain preservation
									and emulation technologies. His multidisciplinary background
									spans computational neuroscience, psychology, information
									theory, and physics. Randal's work focuses on the theoretical
									and practical challenges of achieving whole brain emulation
									and the development of technologies that could enable
									consciousness to operate on non-biological substrates.
								</p>
							}
						/>

						<KeynoteSpeaker
							name="Michael Ferguson"
							portrait="/img/2025/michael-ferguson.jpg"
							content={
								<p>
									Michael Ferguson is a Harvard neuroscientist pioneering the
									emerging field of neurospirituality. As an Instructor in
									Neurology at{" "}
									<a href="https://hms.harvard.edu/">Harvard Medical School</a>{" "}
									and Founding Director of the{" "}
									<a href="https://neurospirituality.bwh.harvard.edu/">
										Neurospirituality Lab
									</a>{" "}
									at{" "}
									<a href="https://www.brighamandwomens.org/">
										Brigham and Women's Hospital
									</a>
									's Center for Brain Circuit Therapeutics, Michael investigates
									the neural correlates of spiritual experiences, prayer, and
									meditation. His research explores how brain circuits underlie
									religious belief and spiritual transformation, including
									studies on the neurological effects of psychedelics on
									consciousness. With expertise spanning bioengineering and
									neuroscience, Michael's work examines the biological basis of
									transcendent experiences and the intersection of neuroscience
									with religious and spiritual phenomena.
								</p>
							}
						/>
					</div>
				</div>

				{/* <p className="mt-12 text-3xl font-extrabold text-yellow-100 tracking-tight sm:text-4xl">
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
									Caleb is a husband, father of 4 children, lives in the Pacific
									Northwest, and has been an active participant in the{" "}
									<a href="https://www.transfigurism.org">
										Mormon Transhumanist Association
									</a>{" "}
									for nearly a decade. Professionally, he leads data
									architecture teams at{" "}
									<a href="https://www.disney.com/">Disney</a> supporting
									complex data analysis. Mormonism holds a fond place in his
									heart and he personally finds Mormon Transhumanism to be the
									most radiant form of Mormon thought today.
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
									<a href="https://www.joincrescendo.com">Crescendo</a>, which
									is building a talent search and payroll platform that will be
									used by <a href="https://www.byupathway.edu/">BYU Pathway</a>{" "}
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
							name="Chris Bradford"
							portrait="/img/2024/chris-bradford.jpg"
							content={
								<p>
									Chris is a founding member of the{" "}
									<a href="https://www.transfigurism.org">MTA</a> and has
									previously served as Vice-President and Director. Chris and
									his wife, Lucy, have eight children. Chris spent most of his
									youth overseas in the Middle East and Europe, returning to the
									U.S. to graduate with a degree in Linguistics from{" "}
									<a href="https://www.byu.edu">Brigham Young University</a>.
									Professionally, Chris has made a career in software
									engineering. He also enjoys performing, especially musical
									theater and choral music, as well as reading and philosophy.
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
									.
								</p>
							}
						/>
						<OtherSpeaker
							name="Dallin Bradford"
							portrait="/img/2024/dallin-bradford-square.jpg"
							content={
								<p>
									Dallin Bradford is an accomplished voice actor whose passion
									for storytelling was kindled by his parents‘ love of reading
									and theater. He studied acting under David Scott in Dublin,
									Ireland, and has since built a career in audiobook narration,
									theater, voice over, and film. Dallin also teaches acting and
									voice over through the{" "}
									<a href="https://academy.haletheater.org/home">
										Hale Academy
									</a>
									. He and his wife, Kennedy, enjoy a flexible lifestyle,
									pursuing artistic endeavors, traveling, and giving back to
									their community. Dallin serves as a director in the
									Association.
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
										Massachusetts Institute of Technology
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
									Charles Randall Paul, PhD, is the president of the{" "}
									<a href="https://relidip.org/">
										Foundation for Religious Diplomacy
									</a>{" "}
									, which works to build trust between religious and ideological
									rivals. He authored{" "}
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
									<a href="https://www.byu.edu">Brigham Young University</a> in
									social psychology, an MBA from{" "}
									<a href="https://www.harvard.edu">Harvard University</a>, and
									after a career in commercial real estate, a PhD at the{" "}
									<a href="https://www.uchicago.edu">University of Chicago</a>,
									Committee on Social Thought. He has served as a bishop in the
									Church of Jesus Christ of Latter-day Saints. He is a director
									on several business and philanthropic boards. He has five
									children and sixteen grandchildren.
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
									has grown up with the association supplementing his faith, and
									currently serves as a Director in the{" "}
									<a href="https://www.transfigurism.org">
										Mormon Transhumanist Association
									</a>
									. He received a bachelor’s degree in Political Science from
									<a href="https://www.byu.edu">Brigham Young University</a> and
									is trilingual (English, French, and Mandarin Chinese). Spencer
									currently works in government contracting as a Financial
									Analyst for <a href="https://hive-grp.com/">Hive Group LLC</a>
									, and he serves as a member of his local congregation’s Elders
									Quorum Presidency.
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
				</div> */}
			</div>
		</div>
	);
}
