import Seperator from "../components/GradientWave/Seperator"

function SkillsTools() {

	return (
		<section title="Skills and Tools" className="w-screen h-fit relative px-24  small:px-0 flex flex-col items-center small:items-end justify-between select-none font-mada text-grey font-[400] gap-20 snap-center bg-chalk list-none">

			<div className="large:flex small:px-10 small:text-base justify-between w-full text-right py-20 small:py-0 small:grid small:grid-cols-2 small:gap-4">
				<ul className="small:w-[70%] large:text-[1.75rem]">
					<li className="text-charcoal text-[2.5vw]  small:text-[3vh]">Frameworks</li>
					<li>NEXTJs</li>
					<li>ReactJs</li>
					<li>ReactNative</li>
					<li>ExpressJs</li>
					<li>NodeJs</li>
					<li>EthersJs</li>
					<li>Apollo</li>
					<li>Redux</li>
				</ul>

				<ul className="small:w-[70%] large:text-[1.75rem]">
					<li className="text-charcoal text-[2.5vw]  small:text-[3vh]">Languages</li>
					<li>JavaScript</li>
					<li>TypeScript</li>
					<li>GraphQL</li>
					<li>Python</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>SQL</li>
				</ul>

				<ul className="small:w-[70%] large:text-[1.75rem]">
					<li className="text-charcoal text-[2.5vw]  small:text-[3vh]">Platforms</li>
					<li>Google Cloud</li>
					<li>Firebase</li>
					<li>Moralis</li>
					<li>Infura</li>
					<li>Sanity</li>
					<li>Docker</li>
					<li>Figma</li>
					<li>Moz</li>
				</ul>

				<ul className="small:w-[70%] large:text-[1.75rem]">
					<li className="text-charcoal text-[2.5vw]  small:text-[3vh]">Databases</li>
					<li>PostgreSQL</li>
					<li>Firestore</li>
					<li>MongoDB</li>
					<li>MySQL</li>
					<li>Neo4j</li>
					<li>Redis</li>
					<li>CeramicDB</li>
				</ul>
			</div>

			<p title="Tech Poem" className="text-[1vw] w-[35%] small:-mb-10 -my-5 small:text-sm self-start small:self-center small:text-center small:w-full">
				Through lines of code, a brand comes to life,<br/>
				In the realm of tech, I conquer the strife. <br/>
				If you seek a creator, passionate and true, <br/>
				Write to me now, let's build something new!
			</p>

			<Seperator
				bottom			
			/>

		</section>
	)
}

export default SkillsTools