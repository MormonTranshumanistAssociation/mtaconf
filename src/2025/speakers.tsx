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
							className="rounded-lg w-full h-auto shadow-lg"
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
			<div className="flow-root bg-yellow-100 rounded-lg px-6 pb-8">
				<div className="mt-6">
					<div className="p-1">
						<img
							className="rounded-lg w-full h-auto shadow-lg"
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

export function Speakers() {
	return (
		<div className="relative bg-gradient-to-r from-emerald-700 to-orange-400 pb-24 pt-1 px-4 sm:px-6 lg:px-16">
			<div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl">
				<p className="mt-20 text-3xl font-extrabold text-yellow-100 tracking-tight sm:text-4xl">
					Keynote speakers
				</p>

				<div className="mt-4">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
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
							name="Thomas McConkie"
							portrait="/img/2025/thomas-mcconkie.jpg"
							content={
								<p>
									Thomas McConkie is a meditation teacher and author bridging
									contemplative traditions with modern spiritual practice. The
									founder of{" "}
									<a href="https://lowerlightswisdom.org/">
										Lower Lights School of Wisdom
									</a>{" "}
									and author of{" "}
									<em>
										Navigating Mormon Faith Crisis: A Simple Developmental Map
									</em>
									, Thomas brings over twenty years of Buddhist practice
									together with expertise in adult developmental psychology. His
									work explores the intersection between classical states of
									consciousness and stages of development, offering insights
									into awakening and spiritual development through
									transformative practice. Thomas has developed frameworks for
									understanding faith transitions and spiritual growth,
									including his recent work on "At-One-Ment" and the integration
									of contemplative practices within religious communities.
								</p>
							}
						/>
					</div>
				</div>

				<p className="mt-16 text-3xl font-extrabold text-yellow-100 tracking-tight sm:text-4xl">
					Other speakers
				</p>
				<div className="mt-6">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
						<OtherSpeaker
							name="Bradley Thornock"
							portrait="/img/2025/brad-thornock.jpg"
							content={
								<p>
									Bradley Thornock, PhD MPH is a bioethicist and medical
									humanist who has taught at the graduate level for over 15
									years. He is currently a Professor of Medical Humanities in
									the College of Osteopathic Medicine at Rocky Vista
									University’s Southern Utah campus. He specializes in the
									ethics and social implications, including the religious
									intersections, of emerging technologies. He has published and
									presented dozens of research articles as well as served on
									national medical policy boards as a leader in AI ethics. He
									has also presented on Mormon transhumanism at national medical
									conferences and helped organize the first Latter-day Saint
									bioethics panel at a major medical humanities conference, as
									well as presenting and publishing on other topics pertinent to
									Mormon social ethics such as abortion, genetic modification,
									and public health action.
								</p>
							}
						/>

						<OtherSpeaker
							name="Joseph West"
							portrait="/img/2025/joseph-west.jpg"
							content={
								<p>
									Joseph West lives in Tucson, Arizona with his three children
									and his partner, Katherine Kincaid. Together, they own and
									operate private group psychotherapy practices in both Tucson
									and Salt Lake City. The practice specializes in psychedelic
									integration, and psychedelic assisted therapies. Joseph is
									passionate about creating safe contexts for the use and
									exploration of sacred medicines and technologies, both natural
									and synthetic. In past years, Joseph spent time working as a
									real estate professional, an accountant, a stay-at-home
									parent, and a sociologist. His social-scientific research on
									early Mormon history was published in the Journal for the
									Scientific Study of Religion. Joseph is a co-founding member
									of the MTA and currently serves in the Association as
									Treasurer.
								</p>
							}
						/>

						<OtherSpeaker
							name="Carl Youngblood"
							portrait="/img/2024/carl-youngblood.jpg"
							content={
								<p>
									Carl Youngblood is President and co-founder of the{" "}
									<a href="https://transfigurism.org/">
										Mormon Transhumanist Association
									</a>
									. He regularly engages in thoughtwork surrounding future
									technological advances, and has published essays on topics
									such as artificial intelligence, digital identity, blockchain
									technology, and quantum archaeology. Carl has made a career in
									software engineering, and has worked at and co-founded several
									successful startups. He received a BA in Portuguese from{" "}
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
							name="Katherine Kincaid"
							portrait="/img/2025/katherine-kincaid.jpg"
							content={
								<p>
									Katherine Kincaid is a mother, a small business owner,
									and a mental health therapist. With her partner Joseph, she
									owns and operates private psychotherapy practices in Tucson,
									Arizona and Salt Lake City, Utah. These practices specialize
									in anti-oppressive, trauma-informed mental health therapy for
									individuals and families. One of their specialties is
									psychedelic integration, services and Ketamine Assisted
									Psychotherapy (KAP). She is passionate about perinatal mental
									health, relationship therapy, working with systematically
									marginalized people and working with psychedelics. She is a
									community organizer and a writer, and loves sharing what she
									has learned and what she continues to learn along the way.
								</p>
							}
						/>

						<OtherSpeaker
							name="León Castillo"
							portrait="/img/2025/leon-castillo.jpg"
							content={
								<p>
									Horacio León Fernández del Castillo (“León Castillo”) is the founder and CEO of <a href="https://www.selfmastered.com/">Selfmastered</a>, Professor at <a href="https://www.ie.edu/university/about/">IE University</a>, and a VC investor. Based in Miami, he has lived and worked in Brazil, China, and India, shaping a global perspective he now applies to peak performance. At Selfmastered, he pioneered Neuroexecution: a neuroscience-driven, systems-based protocol that rewires attention, behavior, and identity through measurable protocol that deliver lasting transformation and business growth. Since 2020, his framework has helped more than 350 entrepreneurs replace burnout and distraction with clarity, focus, and consistent execution, engineering the mind as the ultimate driver of transformation.
								</p>
							}
						/>

						<OtherSpeaker
							name="Lincoln Cannon"
							portrait="/img/2025/lincoln-cannon.jpg"
							content={
								<p>
									Lincoln Cannon is a technologist and philosopher, and leading
									voice of Mormon Transhumanism. He writes and presents about
									technological evolution and postsecular religion. Lincoln is a
									co-founder of the{" "}
									<a href="https://transfigurism.org">
										Mormon Transhumanist Association
									</a>{" "}
									the{" "}
									<a href="https://www.christiantranshumanism.org/">
										Christian Transhumanist Association
									</a>
									. He also formulated the{" "}
									<a href="https://new-god-argument.com/">New God Argument</a>,
									an argument for faith in God that is popular among religious
									Transhumanists.
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
									Master’s degree in Biblical Studies from Regent University.
									Matt is currently enrolled in a PhD program for Biblical
									Studies at Amridge University with plans to complete his
									degree in 2027. He is a huge BYU football and basketball fan,
									but also enjoys studying, writing, and teaching on LDS
									Transhumanism topics. When he’s not teaching, reading,
									writing, or watching sports, Matt is usually found playing and
									wrestling with his kids. Matt currently serves as the Vice
									President of the{" "}
									<a href="https://transfigurism.org">
										Mormon Transhumanist Association
									</a>
									.
								</p>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
