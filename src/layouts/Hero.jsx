import { useState,useRef } from "react"
import { useScroll,useSpring,useTransform,motion } from "framer-motion"

import GradientWave from "../components/GradientWave"
import Title from "../components/Title"
import Wabbit from "../components/Wabbit"


function Hero() {

	const [linkSelected, setLinkSelected] = useState(0)
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
	})
	const springScroll = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20,
		restDelta: 0.01,
	})
	const titleBlur = useTransform(springScroll,[0,1],[0,3])

	const [blur,setBlur] = useState(titleBlur.current)
	titleBlur.on("change",(current, value) => {setBlur(current)})


	return (
		<section title="Introduction" ref={ref} className="relative w-full h-fit flex flex-col justify-start items-center pt-32  snap-center">

			<h1 className="hidden">
				I'm Vishnu Shon, I develop solutions that blend creativity with functionality. Over time, my journey has unfolded with a diverse array of experiences, from working with various startups to leading successful fundraising efforts 🚀🚀🚀. I am committed to fostering developer and designer communities and leading with a vision for a tech-driven future.
			</h1>
			
			<Title/>
			<GradientWave/>
			<Wabbit
				springScroll={springScroll}
			/>

			<motion.div 
				className="text-grey small:hidden text-[1em] font-mada font-[400] flex justify-between w-full p-10  items-end absolute  large:bottom-[30%]"
				style={{
					filter:`blur(${blur}px)`
				}}
			>
				
				<ul title="Description"  className="w-fit select-none list-none" >
					<li>I'm <b> Vishnu Shon, </b></li>
					<li>I develop</li>
					<li>solutions that</li>
					<li>blend creativity</li>
					<li>with functionality.</li>
				</ul>

				<section className="w-fit flex flex-col right-0 gap-5 small:hidden" title="Awards" >
					<a
						className="relative hover:text-[#CCCFD4] transition-all list-none"
						target="_blank"
						title="Polygon Buidlit Winner"
						rel="noreferrer"
						onMouseEnter={()=>setLinkSelected(1)}
						onMouseLeave={()=>setLinkSelected(0)}
						href="https://devpost.com/software/reverelabs-dzpu4k">

							{linkSelected===1&&
							<img
								className="absolute top-0 transition-all ease-in-out" 
								alt="Link"
								loading="lazy"
								src="./icons/arrow.svg"
							/>}
							<ul>
								<li>Bounty Winner,</li>
								<li>Polygon Buidlit</li>
								<li>Hackathon</li>							
							</ul>
					</a>

					<a
						className="relative hover:text-[#CCCFD4] transition-all"
						target="_blank"
						title="Ethereum India Winner"
						rel="noreferrer"
						onMouseEnter={()=>setLinkSelected(2)}
						onMouseLeave={()=>setLinkSelected(0)}
						href="https://ethglobal.com/showcase/alkynefi-nampv">

							{linkSelected===2&&
							<img
								className="absolute top-0 transition-all ease-in-out w-[40%] " 
								alt="Link"
								loading="lazy"
								src="./icons/arrow.svg"
							/>}
							<ul>
								<li>Bounty Winner,</li>
								<li>Ethereum India</li>
								<li>Hackathon</li>	
							</ul>
					</a>
					
				</section>
			</motion.div>
		</section>
	)
}

export default Hero