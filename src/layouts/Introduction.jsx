import { motion, useScroll } from "framer-motion"
import { useState, useRef } from "react"
import Line from "../components/Line"


function Introduction() {

	const ref = useRef(null)
	const [rotation,setRotation] = useState(0)
	const { scrollY } = useScroll()

	return (
		<section title="Introduction"  className="flex small:flex-col justify-center items-start small:items-center small:justify-start font-mada p-32 small:px-12 pt-32 small:pt-8  text-charcoal select-none relative gap-40 small:gap-10 h-screen small:h-[70vh]  snap-centerv mb-[5rem] small:mb-[15rem]">

			<section className="w-[25vw] small:gap-10 relative small:w-[90vw] h-[60%] flex flex-col justify-start small:items-end gap-5  small:text-left">
				<h3 
					title="Vishnu Shon" 
					className="font-luimp italic font-[400] small:text-[32vw] text-9xl leading-[7rem] small:leading-none text-charcoal text-right small:text-right">
					Vishnu Shon
				</h3>
				
				<section className="flex justify-end text-sm small:hidden">
					<motion.img
						onMouseEnter={()=>setRotation(rotation=>rotation+30)}
						onMouseLeave={()=>setRotation(rotation=>rotation+30)}
						onClick={()=>setRotation(rotation=>rotation+30)}
						animate={{rotateZ:rotation}}
						loading="lazy"
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

				<article className="large:hidden  text-[4.4vw] small:p-2 w-full flex flex-col items-center leading-snug relative  text-left"  title="Bio" ref={ref}>

					<Line
						scrollY={scrollY} 
						base={12}
					>
						Driven by a passion for crafting innovative
					</Line>
					<Line
						scrollY={scrollY} 
						base={11}
					>
						solutions, I apply a highly methodical
					</Line>

					<section className="relative w-full flex justify-start items-center gap-2 -mt-2 small:-mt-0">
						<img
							className="hover:scale-105 transition-all ease-in-out select-none w-[20%]" 
							alt="Vishnu Shon"
							loading="lazy"
							src="./others/introPhoto.webp"
						/>
						<ul className="list-none">
							<Line
								scrollY={scrollY} 
								base={10}
							>
								approach to product development.
							</Line>
							<Line
								scrollY={scrollY} 
								base={9}
							>
								over time, my journey has unfolded
							</Line>
							<Line
								scrollY={scrollY} 
								base={8}
							>
								with a diverse array of experiences
							</Line>

							<Line
								scrollY={scrollY} 
								base={7}
							>
								working with various startups to
							</Line>

						</ul>
					</section>

					
					

					<Line
						scrollY={scrollY}
						base={6}
					>
						leading successful ‎ 
						<a 
							className="relative hover:text-[#CCCFD4] transition-all underline" 
							target="_blank"
							title="Funding"
							rel="noreferrer"
							href="https://inc42.com/buzz/meet-the-31-web3-startups-that-are-part-of-first-cohort-of-polygonleap-2021/">
							fundraising
						</a>
						‎ efforts. 

					</Line>

					<Line
						scrollY={scrollY} 
						base={5}
					>
						Beyond developing solutions, I am committed to fostering developer and 
					</Line>
					<Line
						scrollY={scrollY} 
						base={4}
					>
						designer communities and leading with a
					</Line>
					<Line
						scrollY={scrollY} 
						base={3}
					>
						 vision for a tech-driven future.
					</Line>
				</article>
			</section>

			<article className="text-[2vw] w-[40vw] small:hidden flex flex-col items-end small:items-center leading-snug relative"  title="Bio" ref={ref}>

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
						loading="lazy"
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
						title="Funding"
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