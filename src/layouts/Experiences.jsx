import ExperienceCard from "../components/ExperienceCard"
import { useWindowSize } from "../utils/useWindowSize"
import { useState, useEffect } from "react"
import { motion,useMotionValueEvent, useScroll } from "framer-motion"
import experience from "../content/data/experince.json"


function Experiences() {


	const AnimationVariants = {
		show: {
			opacity: 1,
			filter: "blur(0px)",
		},
		hide: {
			opacity: 0,
			blur: 1,
			filter: "blur(4px)",
		},
	}

	const [width] = useWindowSize()
	const [device, setDevice] = useState("")
	const [rotation,setRotation] = useState(0)

	const [index,setIndex] = useState(0)
	const [animation, setAnimate] = useState(false);


	const {scrollY} = useScroll()

	useMotionValueEvent(scrollY, "change", 
		(latest) => setRotation(prev=>prev+scrollY?.current/1000)
	)

	useEffect(()=>{
		if(width < 500)
			setDevice("SMALL")
		if(width <=1030 && width >=500)
			setDevice("MEDIUM")
		if(width >1030)
			setDevice("LARGE")
	},[width])

	const bgVariants = {
		0:"Staybook",
		1:"Mathworks",
		2:"Government",
		3:"Respct",
	}


	return (
		<>
			<section  className={`p-12  small:p-4 w-full font-mada bg-ivory text-charcoal select-none relative mb-20 small:mb-0 h-[618vh] small:h-fit` }>

				<section className="absolute flex flex-col items-center justify-start w-[50%]  gap-20 z-20  small:hidden">
					{experience.slice(0,4).map((experience,index)=>
						<ExperienceCard 
							key={index}
							index={index}
							setCurrent={setIndex}
							setAnimate={setAnimate}
							logo={experience.image}
						/>
					)}
				</section>

			{
				device==="LARGE"?
				<div className="border-[1.5px] h-[80vh] small:hidden rounded-md  border-grey p-24 flex justify-end sticky top-20 small:top-10 small:p-4" >

					<motion.section 
						className="w-[40%] small:w-[55%] flex flex-col small:h-[100%] justify-center items-start small:justify-start ease-in-out transition-all"
						variants={AnimationVariants} 
						animate={animation ? 'hide' : 'show'}
					>

						<a  
							className="font-[400] text-[3vw] leading-tight small:text-4xl mb-2"
							alt={experience[index]?.title}
							target="_blank"
							title={experience[index]?.title}
							rel="noreferrer"
							href={experience[index]?.links[0].url}>
							{experience[index]?.title}	
						</a>

						<p  
							className="rounded-full border-[1.5px] border-grey py-1 px-2 small:px-1 small:py-0 w-fit mb-10 text-lg small:text-[0.65rem] small:tracking-tighter">
							{experience[index]?.date}
						</p>

						<div   
							className="flex flex-col gap-5 text-[1vw] small:text-[2vh] small:absolute small:bottom-[12vh] small:-right-4 small:px-4 small:w-[90vw]">
							{experience[index]?.descriptions.slice(0,3).map((description,id)=>
								<p key={id}>
									{description}
								</p>
							)}
						</div>

					</motion.section>

					<motion.img
						animate={{rotateZ:rotation}}
						className="absolute bottom-10 right-10 small:right-10"
						alt="Star"
						src="./icons/darkStar.svg"
					/>
				</div>:

				<div className="flex flex-col items-center gap-10">
					{experience.slice(0,4).map((experience,index)=>
						<div className="border-[1.5px] h-[80vh] rounded-md  border-grey p-24 flex justify-end small:justify-start small:top-10 small:p-4 relative" >

							<section 
								className="flex flex-col justify-center items-center w-[40%] h-[20vh] mr-4" 
							>
								<img 
									className="absolute h-[10%] z-10"
									alt={experience.title}
									src={experience.image}
								/>

								<aside  title="Experience" className={`realtive w-full z-2 rounded-md h-full ${bgVariants[index]}`}>
									<div className="w-full h-full z-10 bg-noise "></div>
								</aside>

							</section>

							<section 
								className="w-[40%] relative small:w-[55%] flex flex-col small:h-[100%] justify-center items-start small:justify-start ease-in-out transition-all"
							>
		
								<a  
									className="font-[400] text-[2.8vw] leading-tight small:text-[3.8vh] mb-2"
									alt={experience?.title}
									target="_blank"
									title={experience?.title}
									rel="noreferrer"
									href={experience?.links[0].url}>
									{experience?.title}	
								</a>
		
								<p  
									className="rounded-full border-[1.5px] border-grey py-1 px-2 small:px-1 small:py-0 w-fit mb-10 text-lg small:text-[0.65rem] small:tracking-tighter">
									{experience?.date}
								</p>
		
								<div   
									className="flex flex-col gap-5 text-[1.8vh] small:absolute small:bottom-[12vh] small:-right-4 small:px-4 small:w-[90vw]">
									{experience?.descriptions.slice(0,3).map((description,id)=>
										<p key={id}>
											{description}
										</p>
									)}
								</div>
		
							</section>
		
							<motion.img
								animate={{rotateZ:rotation}}
								className="absolute bottom-10 right-10 small:right-10"
								alt="Star"
								src="./icons/darkStar.svg"
							/>
						</div>
					)}
				</div>
			}	

			</section>
		</>
	)
}

export default Experiences