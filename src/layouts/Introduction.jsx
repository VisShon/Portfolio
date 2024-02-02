import { motion, useScroll } from "framer-motion"
import { useState, useRef } from "react"
import Line from "../components/Line"


function Introduction() {

	const ref = useRef(null)
	const [rotation,setRotation] = useState(0)
	const { scrollY } = useScroll()

	return (
		<section title="Introduction"  className="flex small:flex-col justify-center items-start small:items-center font-mada p-32 small:px-12 pt-32 text-charcoal select-none relative gap-40 small:gap-10 h-screen  snap-centerv mb-16 small:-mb-10">

			<section className="w-[30%] relative small:w-[60vw] h-[60%] flex flex-col justify-start small:items-center gap-5 small:gap-0">
				<h1 
					title="Vishnu Shon" 
					className="font-luimp italic font-[400] small:text-[12vh] text-9xl leading-[7rem] small:leading-none text-charcoal text-right ">
					Vishnu Shon
				</h1>
				
				<section className="flex justify-end text-sm small:hidden">
					<motion.img
						onMouseEnter={()=>setRotation(rotation=>rotation+30)}
						onMouseLeave={()=>setRotation(rotation=>rotation+30)}
						onClick={()=>setRotation(rotation=>rotation+30)}
						animate={{rotateZ:rotation}}
						className="w-[15%] small:w-[8vh]"
						alt="Star"
						src="./icons/star.svg"
					/>
					<ul 
						className="text-right ml-5 list-none">
						<li>I am proficient with </li>
						<li>DevOps, Blockchain,</li> 
						<li>Web Dev and UI/UX.</li>
					</ul>
				</section>
			</section>

			<article className="text-[2vw] small:text-[1.8vh] w-[50%] small:w-auto flex flex-col items-end small:items-center leading-snug relative"  title="Bio" ref={ref}>

				<Line
					scrollY={scrollY} 
					base={-20}
				>
					Driven by a passion for crafting innovative
				</Line>
				<Line
					scrollY={scrollY} 
					base={-40}
				>
					solutions, I apply a highly methodical
				</Line>
				
				<section className="relative w-full flex justify-start items-center gap-2 -mt-2 small:-mt-0">
					<img
						className="hover:scale-105 transition-all ease-in-out select-none w-[20%]" 
						alt="Vishnu Shon"
						src="./others/introPhoto.webp"
					/>
					<ul className="list-none">
						<Line
							scrollY={scrollY} 
							base={80}
						>
							approach to product development.
						</Line>
						<Line
							scrollY={scrollY} 
							base={60}
						>
							over time, my journey has unfolded
						</Line>
						<Line
							scrollY={scrollY} 
							base={40}
						>
							with a diverse array of experiences
						</Line>
						<Line
							scrollY={scrollY} 
							base={20}
						>
							working with various startups to
						</Line>
					</ul>
				</section>

				<Line
					scrollY={scrollY}
					base={-60}
				>
					leading successful ‎ 
					<a 
						className="relative hover:text-[#CCCFD4] transition-all underline" 
						target="_blank"
											rel="noreferrer"
						href="https://inc42.com/buzz/meet-the-31-web3-startups-that-are-part-of-first-cohort-of-polygonleap-2021/">
						fundraising
					</a>
					‎ efforts. 
				
			</Line>

				<Line
					scrollY={scrollY} 
					base={-80}
				>
					Beyond developing solutions, I am committed
				</Line>
				<Line
					scrollY={scrollY} 
					base={-100}
				>
					to fostering developer and designer
				</Line>
				<Line
					scrollY={scrollY} 
					base={-120}
				>
					communities and leading with a vision for a
				</Line>
				<Line
					scrollY={scrollY} 
					 base={-140}
					>
						tech-driven future.
					</Line>
			</article>
		</section>
	)
}

export default Introduction